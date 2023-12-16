function populateGallery(imageUrls, krona_or_lora ,fname, galleryId) {
    var gallery = document.getElementById(galleryId);

    imageUrls.forEach(function(image) {
        var container = document.createElement('div');
        container.className = 'image-container';
        
        var img = document.createElement('img');
        img.src = "./static/" + krona_or_lora + '/' + fname + '/' + 'generated/' + image;
        img.width = 224;
        img.height = 224;
        container.appendChild(img);

        // Create a caption for each image
        var caption = document.createElement('h6');
        caption.textContent = image.replace('.png', ''); // Remove .png from the filename
        caption.className = 'caption'; // Add the 'caption' class to the caption
        caption.setAttribute('data-text', image.replace('.png', '')); // Set data-text attribute

        container.appendChild(caption);
        gallery.appendChild(container);
    });
}