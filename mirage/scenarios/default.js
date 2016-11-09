export default function(server) {
  server.loadFixtures('blog-posts');
  server.loadFixtures('authors');
}
