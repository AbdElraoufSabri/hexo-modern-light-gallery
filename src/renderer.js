function addRunnableTag(data){
    data.content+='<script>'+
        `$('.gallery').lightGallery({
            thumbnail:true,
            selector: '.lightgallery'
        });`
        +'</script>';
}

function render(data){
    addRunnableTag.call(this,data);
};

exports.render = render;
