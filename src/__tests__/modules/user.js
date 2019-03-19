import puppeteer from "puppeteer";
const CDP = require('chrome-remote-interface');
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({toMatchImageSnapshot})
describe('Blog module full cycle test  ', () => {
    let page,browser,client;
    beforeAll(async ()=>{
        global.__TIMEOUT__ = 20000
        jest.setTimeout(100000);
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 80,
            args: [
               '--remote-debugging-port=9223'
             ]      
          });
        page = await browser.newPage();
        await page.setViewport({width:1300,height:1000})
        page.once('load', () => { console.log('Page loaded!') });
        await page.goto('http://localhost:8080/users/create');
        // await page.evaluate(() => {debugger;});
        
        
    })
    test('Should match the initial page styling and color screenshot',async ()=>{
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            customDiffConfig:{
                threshold:0.50
            
            },
            // failureThreshold:0.01,
            // failureThresholdType:'percent'
        })    
        
    },global.__TIMEOUT__)
    
    
    test('Should show the error message page',async ()=>{
        client = await CDP({port:9223});
        client.Page.startScreencast({
            format:'jpeg',
            output:'jpeg',
            quality:40,
            everyNthFrame:8
        });
        let n =0;
        let folderName= __filename.split('/').pop().replace('.js','')
        mkdirp.sync(path.join(process.cwd(),'screencast',folderName))
        client.screencastFrameListener = ({data,metadata,sessionId})=>{
            client.Page.screencastFrameAck({sessionId})
            
            let filename = path.join(process.cwd(),'screencast',folderName,(n++) + '.jpg')
            fs.writeFile(filename, Buffer.from(data, 'base64'),function(err){
                if(err)
                    console.log(err,"-----")
            });
        }
        client.Page.screencastFrame(client.screencastFrameListener)
        await page.click('button[type="submit"]')
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            customDiffConfig:{
                threshold:0.50
            },
        })
        
    },global.__TIMEOUT__)

    test('Should create a new user',async ()=>{
        await page.type('input[placeholder="Address"]', '1007 Mountain Drive, Gotham')
        await page.click('button[type="submit"]')
        // alert-success
        let successMsg  = await page.$eval('.alert-success',el=>el?true:false)
        expect(successMsg).toBe(true)
        
    },global.__TIMEOUT__)
    
    
    // test('should render the after save correctly',async ()=>{
    //     let snapshot =  await page.content();
    //     expect(snapshot).toMatchSnapshot()
    // },global.__TIMEOUT__)
    
    afterAll(async()=>{
        await page.close();
        await browser.close();
    })
    
})
