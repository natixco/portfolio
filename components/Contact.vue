<template>
  <div>
    <PolkaDots id="polka2" rows="20" cols="5"/>
    <div class="center">
      <SectionTitle text="nice to meet you! 👋" />
      <div class="contact-container">
        <div class="contact-inner-container">
          <ul class="contact-list">
            <li><Link src="https://github.com/natixco" text="GitHub" /></li>
            <li><Link src="https://twitter.com/natixco" text="Twitter" /></li>
            <li><Link src="mailto:patrikvisloczki@gmail.com" text="Email" /></li>
          </ul>
        </div>
        <div class="contact-inner-container">
          <form @submit="submitForm">
            <input
              data-colorchange="false"
              placeholder="Name"
              v-model="name"
              v-bind:class="{invalid: nameError}">
            <input
              data-colorchange="false"
              placeholder="Email"
              v-model="email"
              v-bind:class="{invalid: emailError}">
            <textarea
              placeholder="Message"
              v-model="message"
              v-bind:class="{invalid: messageError}"
              data-colorchange="false"></textarea>
            <div class="row">
              <button data-colorchange="false">
                <p v-if="!isLoading" data-colorchange="false">Let's talk!</p>
                <div class="spinner" v-if="isLoading" data-colorchange="false"></div>
              </button>
              <p>{{statusText}}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: null,
    nameError: false,
    email: null,
    emailError: false,
    message: null,
    messageError: false,
    isLoading: false,
    statusText: ''
  }),
  methods: {
    async submitForm(e) {
      e.preventDefault();

      this.isLoading = !this.isLoading;
      this.nameError = (this.name === null || this.name.length === 0);
      this.emailError = (this.email === null || this.email.length === 0);
      this.messageError = (this.message === null || this.message.length === 0);

      if(this.nameError || this.emailError || this.messageError) {
        this.isLoading = false;
        this.statusText = '';
        return;
      }

      let data = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      await fetch('/api/email', requestOptions)
        .then(res => {
          if(res['status'] !== 200) this.statusText = 'An error has occured. Couldn\'t send the message.';
          else this.statusText = 'Message has been sent successfully!';
          this.isLoading = false;
        })
        .catch(err => {
          this.isLoading = false;
          this.statusText = 'An error has occured. Couldn\'t send the message.';
        })
    }
  }
}
</script>

<style scoped lang="sass">
@import '../assets/_import'

#polka2
  position: absolute
  right: 0

.center
  left: 50%
  transform: translateX(-50%)
  padding-bottom: 100px

  .contact-container
    position: relative
    margin-top: 50px
    display: grid
    grid-template-rows: 1fr
    grid-template-columns: 1fr 1fr

    .contact-inner-container
      position: relative
      width: 100%

      .contact-list
        list-style: none
        li
          margin-bottom: 20px
          a
            cursor: pointer
            font-size: 20px

      form
        display: flex
        flex-direction: column
        width: 100%

        input, textarea
          width: 100%
          border: 2px solid rgba(0,0,0,.1)
          outline: none
          height: 50px
          border-radius: 12px
          padding: 0 15px
          font-size: 16px
          font-weight: 400
          color: $gray
          margin-bottom: 25px
          transition: all .3s ease-out
          &:hover, &:focus
            border-color: color(accent)

        input.invalid, textarea.invalid
          border-color: hsl(1, 100%, 61%)
          animation: leftToRight .4s ease-out

        textarea
          padding: 15px
          height: 120px
          min-height: 120px
          max-height: 250px
          resize: vertical

        .row
          display: flex
          flex-direction: row
          align-items: center

          p
            font-size: 15px

          button
            margin-right: 15px
            position: relative
            outline: none
            border: 2px solid transparent
            height: 50px
            border-radius: 12px
            background: color(accent)
            cursor: pointer
            width: 150px
            transition: all .3s ease-out
            &:hover
              transform: translateY(-2px)
            &:focus
              background: color(accent-darker)

            p
              font-size: 16px
              color: color(text)

            .spinner
              position: absolute
              top: calc(50% - 12.5px)
              left: calc(50% - 12.5px)
              transform: translate(-50%,-50%)
              width: 25px
              height: 25px
              border-radius: 50%
              border: 2px solid transparent
              border-top-color: color(text)
              border-bottom-color: color(text)
              animation: spin 1s infinite

@keyframes leftToRight
  0%
    transform: translateX(-10px)
  25%
    transform: translateX(10px)
  50%
    transform: translateX(-5px)
  75%
    transform: translateX(5px)
  100%
    transform: translateX(0px)

@keyframes spin
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)

@media only screen and (max-width: 800px)
  .contact-container
    grid-template-rows: 2fr !important
    grid-template-columns: 1fr !important

    form
      margin-top: 40px

      .row
        flex-direction: column !important
        align-items: start !important

        button
          width: 100% !important
          margin-bottom: 15px

  #polka2
    display: none

</style>
