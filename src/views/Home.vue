<template>
  <b-container class="home-page">
    <h1>The Library Project</h1>
      <div class="home-page__members-wrapper">
        <div class="home-page__member">
          <img src="../images/1.jpg" />
          <a href="https://gitlab.com/chk13vik" target="_blank">Виталий Ярымов</a>
        </div>
        <div class="home-page__member">
          <img src="../images/2.jpg" />
          <a href="https://gitlab.com/dorozhkin-pv" target="_blank">Павел Дорожкин</a>
        </div>
        <div class="home-page__member">
          <img src="../images/3.jpg" />
          <a href="https://gitlab.com/ShchArt" target="_blank">Артем Щекин</a>
        </div>
        <div class="home-page__member">
          <img src="../images/4.jpg" />
          <a href="https://gitlab.com/x-ivanova" target="_blank">Наталья Иванова</a>
        </div>
        <div class="home-page__member">
          <img src="../images/5.jpg" />
          <a href="https://gitlab.com/svorgen" target="_blank">Андрей Михайличенко</a>
        </div>
      </div>
  </b-container>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped lang="scss">
  .home-page {

    &__members-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      text-align: center;
    }

    &__member {
      width: 18%;

      img {
        width: 100%;
      }

      a {
        text-decoration: none;
        font-size: 16px;
        color: #000;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
</style>
