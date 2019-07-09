<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/5brvJbR1Pn8/1600x900">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">Portfolio</div>
    </ImgBanner>
    <v-container>
      <template>
        <editor-content :editor="editor" />
      </template>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import Writer from '../components/PortfolioWriter'
import Portfolio from '@/components/Portfolio'
import FirebaseService from '@/services/FirebaseService'
import { Editor, EditorContent } from 'tiptap';

export default {
	name: 'PortfolioWriterPage',
	components: {
    Writer,
		ImgBanner,
    PortfolioList,
    EditorContent,
  },
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      content: '<p>this is just a ... </p>'
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>