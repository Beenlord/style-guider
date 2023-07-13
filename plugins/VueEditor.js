import Vue from 'vue'
import Vuex from 'vuex'
import { createEditor } from 'vueditor'

import 'vueditor/dist/style/vueditor.min.css'

Vue.use(Vuex)

let editorone = createEditor('#editorone', {
  toolbar: [
    'element', 'link', '|', 'insertOrderedList', '|', 'insertUnorderedList', '|', 'sourceCode'],
  uploadUrl: '',
  id: '',
  classList: []
})
editorone.setContent('editor one')
editorone.getContent()

let editortwo = createEditor('#editortwo', {
  toolbar: [
    'element', 'link', '|', 'insertOrderedList', '|', 'insertUnorderedList', '|', 'sourceCode'],
  uploadUrl: '',
  id: '',
  classList: []
})
editortwo.setContent('editor two')
editortwo.getContent()
