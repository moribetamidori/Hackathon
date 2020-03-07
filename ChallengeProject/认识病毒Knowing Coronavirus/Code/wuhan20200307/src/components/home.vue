<template>
  <div>
    <div class="jd">{{ $t("header.headerTop.text") }}</div>
    <div class="box">
      <div class="box1"></div>
      <div class="logo"></div>
      <nav>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem id="center" name="1">
            <Icon type="md-contacts" />
            WUHAN2020
          </MenuItem>
        </Menu>
      </nav>

      <div class="tab">
        <button @click="langChange('cn')">中文</button>|<button
          @click="langChange('en')"
        >
          英文
        </button>
      </div>
      <div class="main">
        <div class="head">
          <img
            src="https://www.cdc.gov/coronavirus/2019-ncov/images/animated-graphic-2019-nCoV.jpg"
          />
        </div>
        <div class="box">
          <div class="card">
            <h3>症状</h3>
            <ul>
              <li>咳嗽</li>
              <li>发烧</li>
              <li>呼吸困难</li>
              <li>浑身乏力</li>
            </ul>
            <img
              src="https://www.cdc.gov/coronavirus/2019-ncov/images/home-should-know.jpg"
            />
          </div>
          <div class="card">
            <h3>预防与治疗</h3>
            <ul>
              <li>避免与患病的人近距离接触。</li>
              <li>避免触碰自己的眼睛、鼻子和嘴巴</li>
              <li>用家用清洁喷雾或消毒纸巾清洁消毒经常碰到</li>
              <li>的物体表面。</li>
            </ul>
            <img
              src="https://www.cdc.gov/coronavirus/2019-ncov/images/home-situation-updates.jpg"
            />
          </div>
          <div class="card">
            <h3>防止传播的方式</h3>
            <ul>
              <li>戴口罩，时刻监测体温变化</li>
              <li>经常清洁双手</li>
              <li>遮挡咳嗽和喷嚏</li>
              <li>每天清洁所有“高频接触”的物体表面</li>
            </ul>
            <img
              src="https://www.cdc.gov/coronavirus/2019-ncov/images/home-info-for-audiences.jpg"
            />
          </div>
        </div>
        <div class="footer">
          <h4>疫情简讯</h4>
          <ul>
            <li v-for="item in list" :key="item.id">
              <p>{{ item.title }}</p>
              <p style="font-size:15px;">{{ item.pubDateStr }}</p>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <p>认识病毒</p>
        <p>|</p>
        <p>wuhan2020</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme1: "dark",
      key: "3fbfab5100b7952ffadf566af57d00d2",
      list: [
        {
          pubDateStr: "",
          title: ""
        }
      ]
    };
  },
  created() {
    console.log(localStorage.lang);
    this.selectValue =
      localStorage.lang === undefined ? "cn" : localStorage.lang;
    this.$http
      .get(`http://api.tianapi.com/txapi/ncov/index?key=${this.key}`)
      .then(res => {
        this.list = res.data.newslist[0].news;
      });
  },
  methods: {
    langChange(e) {
      // console.log(e)
      localStorage.setItem("lang", e);
      this.$i18n.locale = e;
    }
  }
};
</script>

<style scoped>
* {
  font-size: 16px;
}
#center {
  position: absolute;
  left: 300px;
}
.jd {
  position: absolute;
  top: 209px;
  right: 325px;
  height: 400px;
  width: 500px;
  z-index: 11;
  font-size: 19px;
  line-height: 1.9;
}
.box {
  background: #eeee;
  display: grid;
  position: relative;
  grid-template-areas:
    "logo logo logo"
    "nav   nav    nav"
    "tab  tab    tab"
    "  main  main  main  "
    "footer  footer footer";
  grid-row-gap: 1rem;
  justify-items: center;
  align-items: center;
}
.box .box1 {
  width: 1400px;
  transform: translateX(-50%);
  left: 50%;
  top: 143px;
  height: 1760px;
  z-index: -1;
  background: white;
  position: absolute;
  border: 1px solid red;
}
.box .logo {
  margin-top: -10px;
  grid-area: logo;
  height: 98px;
  background-image: url("../assets/bg123.jpg");
  background-size: 100% 100%;
  width: 1398px;
  position: relative;
  left: 4px;
  bottom: -12px;
}
.box .search {
  grid-area: search;
  height: 98px;
  border: 1px solid black;
}
.box nav {
  grid-area: nav;
  width: 100%;
}
.box .tab {
  grid-area: tab;
  position: absolute;
  left: 18rem;
}
.box .tab button {
  border: none;
  background: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  transition: 0.3s;
  padding: 1rem;
  cursor: pointer;
}

.box .tab button:hover {
  color: aqua;
  transform: scale(1.1);
}

.box .main {
  grid-area: main;
  position: relative;
}

.box .main > .box .card {
  height: 590px;
  width: 390px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 4px 3px 4px #bdbdbd;
  border-radius: 5px;
  padding: 30px;
  margin-top: 30px;
  transition: 0.3s;
}
.box .main > .box .card:hover {
  transform: scale(1.01);
}
.box .main > .box .card > h3 {
  font-size: 40px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}
.box .main > .box .card > ul {
  list-style: none;
  padding-top: 10px;
}
.box .main > .box .card > ul > li {
  height: 60px;
  width: 100%;
  line-height: 60px;
  display: block;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}
.box .main > .box .card > img {
  display: block;
  width: 100%;
  padding-top: 50px;
  border-top-left-radius: 4px;
}
.box .main > .footer {
  height: 600px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.box .main > .footer h4 {
  display: block;
  padding: 20px;
  width: 100%;
  background: #515a6e;
  color: white;
}
.box .main > .footer ul {
  list-style: none;
  padding: 5px;
}
.box .main > .footer ul li {
  display: block;
  font-size: 16px;
  padding: 15px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}
.box .main > .footer ul li p {
  font-size: 28px;
  font-weight: 500;
}
.box .main > .box .card:nth-child(2) {
  margin-left: 68px;
  margin-right: 68px;
}
.box footer {
  grid-area: footer;
  height: 208px;
  background: #515a6e;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.box footer p {
  color: white;
  align-self: center;
}
.box footer p:nth-child(2) {
  margin-left: 3rem;
  margin-right: 3rem;
}
@media screen and (max-width: 968px) {
  .jd {
    display: none;
  }
}
</style>
