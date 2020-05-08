// 意思是告诉TypeScript *.vue后缀的文件可以交给vue模块来处理。
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
