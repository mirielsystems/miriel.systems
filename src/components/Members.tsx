import { createSignal } from 'solid-js';

const Members = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const toggleMenu = () => setMenuOpen(!menuOpen());

  const members = [
    {
      name: 'Miriel(@mirielnet)',
      image: 'https://avatars.githubusercontent.com/u/168396067?v=4',
      position: 'Founder, Administration',
      role: 'Rosekey Developer, Lisna Developer',
      cardLink: 'https://github.com/mirielnet',
    },
    {
      name: 'Milkchan(@XPMilkChan)',
      image: 'https://avatars.githubusercontent.com/u/106049626?v=4',
      position: 'Founder',
      role: 'Tester',
      cardLink: 'https://github.com/XPMilkChan',
    },
    {
      name: 'ねんねこ(@nennneko5787)',
      image: 'https://avatars.githubusercontent.com/u/95109758?v=4',
      position: 'Member',
      role: 'Lisna Contributor, Rosekey Contributor',
      cardLink: 'https://github.com/nennneko5787',
    },
    {
      name: 'ysmreg(@ysmreg)',
      image: 'https://cdn.discordapp.com/avatars/808300367535144980/b12af9e1c15f264f1c363d7f14520e40.png?size=1024',
      position: 'Member',
      role: 'Lisna Contributor',
      cardLink: 'https://github.com/ysmreg',
    },
    {
      name: 'etc...',
      image: '',
      position: 'More members',
      role: '',
      cardLink: '#',
    },
  ];

  return (
    <div class="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-black text-white animate-pageLoad">
      {/* Header */}
      <header class="flex justify-between items-center p-4 bg-opacity-70 backdrop-blur-lg shadow-lg fixed w-full z-10">
        <img src="https://i.imgur.com/Rrd9k9C.png" alt="Logo" class="w-32 h-auto animate-fadeIn" />
        <nav class="hidden md:block animate-slideInRight">
          <ul class="flex space-x-6 text-lg">
            <li><a href="/" class="hover:text-cyan-400 transition-colors duration-300">Home</a></li>
            <li><a href="/members" class="hover:text-cyan-400 transition-colors duration-300">Members</a></li>
          </ul>
        </nav>
        <button class="block md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={menuOpen() ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        <nav class={`absolute top-16 right-0 w-full bg-gray-900 p-4 flex flex-col space-y-4 transform transition-transform duration-300 ${menuOpen() ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <a href="/" class="hover:text-cyan-400">Home</a>
          <a href="/members" class="hover:text-cyan-400">Members</a>
        </nav>
      </header>

      {/* Main Content */}
      <main class="pt-24">
        <section class="p-8 max-w-4xl mx-auto text-lg leading-relaxed animate-fadeInUp">
          <h2 class="text-4xl font-bold mb-6 text-cyan-400 text-center">Members</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {members.map(member => (
              <a href={member.cardLink} class="block bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:shadow-cyan-400">
                <img src={member.image || 'https://via.placeholder.com/150'} alt={member.name} class="w-full h-48 object-cover mb-4 rounded-lg" />
                <h3 class="text-2xl font-bold mb-2">{member.name}</h3>
                <p class="text-lg text-gray-400">{member.position}</p>
                <p class="text-gray-500">{member.role}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer class="p-6 bg-gray-900 text-center text-gray-500 animate-fadeIn">
        <p>Copyright © 2024 Miriel Systems All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Members;
