<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2"  label-cols-sm='2'>
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="form.name"
          required
          placeholder="Enter name" />
      </b-form-group>
      
      <b-form-group id="exampleInput6" label="Your Username:" label-for="exampleInput6"  label-cols-sm='2'>
        <b-form-input
          id="exampleInput6"
          type="text"
          v-model="form.username"
          required
          placeholder="Enter your username" />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup1"
        label="Email address:"
        label-for="exampleInput1"
        label-cols-sm='2'
        description="We'll never share your email with anyone else."
      >
      <b-form-input
          id="exampleInput1"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email" />
      </b-form-group>
    
      <b-form-group id="exampleInput7" label="Your address:" label-for="exampleInput7"  label-cols-sm='2'>
        <b-form-input
          id="exampleInput7"
          type="text"
          v-model="fullAddress"
          required
          placeholder="Address" />
      </b-form-group>  

      <b-form-group id="exampleInput8" label="Your Telephone:" label-for="exampleInput8"  label-cols-sm='2'>
        <b-form-input
          id="exampleInput8"
          type="tel"
          v-model="form.phone"
          required
          placeholder="phone" />
      </b-form-group>    

      <b-form-group id="exampleInputGroup5" label="Your Birthday:" label-for="exampleInput5"  label-cols-sm='2'>
        <b-form-input
          id="exampleInput5"
          type="date"
          v-model="form.date"
          required
          placeholder="Enter your Birthday" />
      </b-form-group>

      
        <b-alert v-if="errorMsg" show variant="danger">{{errorMsg}}</b-alert>
        <b-alert v-if="successMsg" show variant="success">{{successMsg}}</b-alert>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: 'sample',
          username:'foo',
          email: 'foo@gmail.com',
          address:{
            street:'58',
            suite:'donald Apt.'
          },
          phone:'9051234567',
          date:'2018-12-01',
          food: null,
          checked: []
        },
        fullAddress:'',
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        errorMsg:'',
        successMsg:''
      }
    },
    
    watch:{
      fullAddress(newAdd,oldAdd){
        
        this.form.address.street = newAdd.split(" ")[0]
        this.form.address.suite = newAdd.split(" ")[1]
      },
      email(){
        debugger
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        var self =this
        this.$store.dispatch('user/addUser',this.form).then(res=>{
          if(res.status==201)
            this.successMsg = 'User successfully Created! '// self.$router.push('/users')
          else
          this.errorMsg = 'Post failed'
        })
      },
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>