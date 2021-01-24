exports.ids = [3];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return postFavArt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return postUnFavArt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return submitArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return delArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const getArticles = params => {
  params = JSON.parse(JSON.stringify(params));
  const url = params.tab === "personal" ? "/api/articles/feed" : "/api/articles";
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url,
    params
  });
};
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}`
  });
};
const getTags = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: "/api/tags"
  });
};
const postFavArt = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post({
    url: `/api/articles/${slug}/favorite`
  });
};
const postUnFavArt = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete({
    url: `/api/articles/${slug}/favorite`
  });
};
const getComment = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/comments`
  });
};
const addComment = (slug, body) => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post({
    url: `/api/articles/${slug}/comments`,
    data: {
      comment: {
        body
      }
    }
  });
};
const submitArticle = (data, slug) => {
  const url = slug ? "/api/articles/${slug}" : "/api/articles";
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post({
    url,
    data
  });
};
const delArticle = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete({
    url: `/api/articles/${slug}`
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/index.vue?vue&type=template&id=fc5ceb84&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.hasLogin)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{'active': _vm.tab === 'personal'},attrs:{"to":{
                path: '/',
                query: {
                  tab: 'personal'
                }
              }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{'active': !_vm.tab && !_vm.tag},attrs:{"to":{
                path: '/',
              }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(!!_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{'active': _vm.tag},attrs:{"to":{
                path: '/',
                query: {
                  tag: _vm.tag
                }
              }}},[_vm._v("# "+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile',
              params: {username: article.author.username}
              }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
              name: 'profile',
              params: {username: article.author.username}
              }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm pull-xs-right",[article.favorited ?'btn-primary' :'btn-outline-primary', article.disabled? 'disabled': '']))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n              "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {slug: article.slug}
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(tag){return _c('nuxt-link',{key:tag,staticClass:"tag-default tag-pill",attrs:{"to":{
              path: '/',
              query: {
                tag: tag
              }
            }}},[_vm._v(_vm._s(tag))])}),1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.pages),function(num,i){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{'active': _vm.currentPage == num}))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
            path: '/', query: {
              page: num,
              tag: _vm.tag,
              tab: _vm.tab
            }
          }}},[_vm._v(_vm._s(num))])],1)}),0)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=template&id=fc5ceb84&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var indexvue_type_script_lang_js_ = ({
  name: "Index",

  async asyncData(context) {
    // console.log(context);
    const {
      route: {
        query
      },
      store: {
        state
      }
    } = context;
    const hasLogin = !!state.user;
    const {
      page = 1,
      tab,
      tag
    } = query;
    const limit = 10;
    const offset = limit * (Number(page) - 1);
    const params = {
      limit: 10,
      offset,
      tag,
      tab
    };
    const [articleRes, tagRes] = await Promise.all([Object(article["d" /* getArticles */])(params), Object(article["f" /* getTags */])()]);
    const {
      articles,
      articlesCount
    } = articleRes;
    const pages = Math.ceil(articlesCount / params.limit);
    return {
      articles,
      articlesCount,
      pages,
      tags: tagRes.tags,
      tab,
      tag,
      currentPage: page,
      hasLogin
    };
  },

  watchQuery: ["page", "tab", "tag"],
  methods: {
    async favorateArt(slug) {
      const art = this.articles.find(item => item.slug === slug);
      if (art.disabled) return;
      this.$set(art, "disabled", true);
      const idx = this.articles.findIndex(item => item.slug === slug);
      const req = art.favorited ? article["h" /* postUnFavArt */] : article["g" /* postFavArt */];

      try {
        const res = await req(slug);
        this.articles.splice(idx, 1, res.article);
      } catch (err) {
        console.log(err);
      } finally {
        art.disabled = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_indexvue_type_script_lang_js_ = (indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d0380358"
  
)

/* harmony default export */ var index = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map