exports.ids = [2];
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=294f9e92&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.tags)))+" class=\"form-control\"> <div class=\"tag-list\"></div></fieldset> <button type=\"submit\" class=\"btn btn-lg pull-xs-right btn-primary\">Publish Article</button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=294f9e92&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: "Editor",
  middleware: ["auth"],

  data() {
    return {
      title: "",
      description: "",
      body: "",
      tags: ""
    };
  },

  async mounted() {
    const {
      article
    } = await Object(api_article["c" /* getArticle */])(this.$route.params.slug);
    this.title = article.title;
    this.description = article.description;
    this.body = article.body;
    this.tags = article.tagList.join(",");
  },

  methods: {
    async submit() {
      const params = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tags.split(",")
      };

      try {
        const res = await Object(api_article["i" /* submitArticle */])(params, this.$route.query.slug);
        this.$router.go(-1);
      } catch (er) {
        console.log(er);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "94f0aa72"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map