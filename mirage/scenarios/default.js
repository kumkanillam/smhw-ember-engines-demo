export default function(server) {
  server.loadFixtures('teachers');
  server.loadFixtures('parents');
  server.loadFixtures('students');
  server.loadFixtures('class-groups');
  server.loadFixtures('meetings');
  server.loadFixtures('homeworks');
}
