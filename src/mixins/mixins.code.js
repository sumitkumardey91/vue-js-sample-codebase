
let loading = ''
export const Mixins = {

   methods: {

    OpenLoader () {
        loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
            });

    },
    CloseLoader () {
        loading.close();
    },
    
    fullname (firstname, lastname) {
        return firstname + ' ' + lastname;
    }
   } 
}
