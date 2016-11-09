export default function() {
  this.get('/blog-posts', function(schema, req) {
    return schema.blogPosts.where({ postType: req.queryParams.postType });
  });
  this.get('/blog-posts/:id');
  this.get('/authors');
  this.get('/authors/:id');
}
