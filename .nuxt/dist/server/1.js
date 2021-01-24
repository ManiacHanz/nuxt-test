exports.ids = [1];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=cbe7a448&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('ArticleMeta',{attrs:{"article":_vm.article,"user":_vm.user}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.contextBody))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('ArticleMeta',{attrs:{"article":_vm.article,"user":_vm.user}})],1),_vm._ssrNode(" <div class=\"row\"><div class=\"col-xs-12 col-md-8 offset-md-2\"><form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.input))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "+(_vm._ssrList((_vm.comments),function(item){return ("<div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(item.body))+"</p></div> <div class=\"card-footer\"><a"+(_vm._ssrAttr("to",{name: 'profile', params: {username: item.author.username}}))+" class=\"comment-author\"><img"+(_vm._ssrAttr("src",item.author.image))+" class=\"comment-author-img\"></a>\n             \n            <a href class=\"comment-author\">"+_vm._ssrEscape(_vm._s(item.author.username))+"</a> <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(item.createdAt))+"</span> "+((item.author.username === _vm.user.username)?("<span class=\"mod-options\"><i class=\"ion-edit\"></i> <i class=\"ion-trash-a\"></i></span>"):"<!---->")+"</div></div>")}))+"</div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=cbe7a448&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/meta.vue?vue&type=template&id=b58e61c8&
var metavue_type_template_id_b58e61c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
            name: 'profile', 
            params: {username: _vm.article.author.username}
          }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
            name: 'profile', 
            params: {username: _vm.article.author.username}
          }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm.article.createdAt))+"</span>")],2),_vm._ssrNode(" "+((_vm.user.username !== _vm.article.author.username)?("<button class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n     \n    Follow "+_vm._s(_vm.article.author.username)+"\n    ")+"<span class=\"counter\">(10)</span></button>"):"<!---->")+"\n    \n  "+((!_vm.article.favorited && _vm.user.username !== _vm.article.author.username)?("<button class=\"btn btn-sm btn-outline-primary\"><i class=\"ion-heart\"></i>\n     \n    Favorite Post\n    <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>"):(_vm.article.favorited && _vm.user.username !== _vm.article.author.username)?("<button class=\"btn btn-sm btn-primary\"><i class=\"ion-heart\"></i> <span class=\"ng-binding ng-scope\">Unfavorite Article</span> <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>"):"<!---->")+" "),(_vm.user.username === _vm.article.author.username)?_vm._ssrNode("<span>","</span>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
        name: 'editor',
        params: {slug: _vm.article.slug}
      }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n    ")]),_vm._ssrNode(" <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n    </button>")],2):_vm._e()],2)}
var metavue_type_template_id_b58e61c8_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/meta.vue?vue&type=template&id=b58e61c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/meta.vue?vue&type=script&lang=js&
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

/* harmony default export */ var metavue_type_script_lang_js_ = ({
  name: "Article-meta",
  props: {
    article: {
      type: Object,
      required: true
    },
    user: {
      type: Object
    }
  },
  methods: {
    async delArticle() {
      const {
        params: {
          slug
        }
      } = this.$route;
      await Object(api_article["b" /* delArticle */])(slug);
      this.$router.go(-1);
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_metavue_type_script_lang_js_ = (metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/meta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_metavue_type_script_lang_js_,
  metavue_type_template_id_b58e61c8_render,
  metavue_type_template_id_b58e61c8_staticRenderFns,
  false,
  null,
  null,
  "0429d4b1"
  
)

/* harmony default export */ var meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




const MarkdownIt = __webpack_require__(27);

/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleDetail",
  components: {
    ArticleMeta: meta
  },
  middleware: ['auth'],

  async asyncData({
    route
  }) {
    const {
      params: {
        slug
      }
    } = route;
    const [ArticleRes, commentsRes] = await Promise.all([Object(api_article["c" /* getArticle */])(slug), Object(api_article["e" /* getComment */])(slug)]);
    const {
      article
    } = ArticleRes;
    const {
      comments
    } = commentsRes;
    const md = new MarkdownIt();
    const contextBody = md.render(article.body);
    return {
      article,
      comments,
      slug,
      contextBody
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },

  data() {
    return {
      input: ""
    };
  },

  methods: {
    async submitComment() {
      try {
        await Object(api_article["a" /* addComment */])(this.slug, this.input);
        await getComments();
      } catch (e) {
        console.log(e);
      }
    },

    async getComments() {
      const {
        comments
      } = await Object(api_article["e" /* getComment */])(this.slug);
      this.comments = comments;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f2860f10"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map