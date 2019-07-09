<template>
  <div>
    <div style="line-height:1.2em;font-size:3.2em; text-align:center;" slot="text">Add Portfolio<br></div>
      <v-flex>
          <v-text-field
            label="Title"
            outline
          ></v-text-field>
        </v-flex>
        <input type="file" ref="file" class="imgur" accept="image/*" data-max-size="5000" style="display:none" />
	  <v-layout>
        <v-flex xs12 sm12 md12 >
        <v-btn class="ThumbnailBtn" color="info" @click="$refs.file.click()">썸네일 선택</v-btn>
        <span class="ThumbnailLink"></span onloadedmetadata="">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </v-flex>
      </v-layout>
        <v-btn color="info" dark v-on:click="postPortfolio">등록하기</v-btn>
        <v-btn color="info" dark to="portfolio">돌아가기</v-btn>


  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Portfolio from '@/components/Portfolio'
import FirebaseService from '@/services/FirebaseService'
    export default {
		name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
		},
		methods:{
			postPortfolio(){
				alert(this.editorData);
				alert(this.title);
				this.$router.push('/');
				//FirebaseService.postPortfolio(this.title,this.editorData,null);
			}
		}
    }
</script>
<style>
  .ck-editor__editable {
    min-height: 500px;
	  width: 100%;
   }
</style>
