function populateGallery(imageUrls, galleryId) {
    var gallery = document.getElementById(galleryId);

    imageUrls.forEach(function(image) {
        var container = document.createElement('div');
        container.className = 'image-container';
        
        var img = document.createElement('img');
        img.src = "./static/results/" + image;
        container.appendChild(img);

        // Create a caption for each image
        var caption = document.createElement('p');
        caption.textContent = image.replace('.png', ''); // Remove .png from the filename
        caption.className = 'caption'; // Add the 'caption' class to the caption
        container.appendChild(caption);

        gallery.appendChild(container);
    });
}