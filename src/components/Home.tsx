import { createSignal } from 'solid-js';

const Home = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const toggleMenu = () => setMenuOpen(!menuOpen());

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

        {/* Hamburger Menu Button for Mobile */}
        <button class="block md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={menuOpen() ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {/* Mobile Menu */}
        <nav class={`absolute top-16 right-0 w-full bg-gray-900 p-4 flex flex-col space-y-4 transform transition-transform duration-300 ${menuOpen() ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <a href="/" class="hover:text-cyan-400">Home</a>
          <a href="/members" class="hover:text-cyan-400">Members</a>
        </nav>
      </header>

      {/* Main Content */}
      <main class="pt-24">
        {/* About Section */}
        <section class="p-8 max-w-4xl mx-auto text-lg leading-relaxed animate-fadeInUp">
          <h2 class="text-4xl font-bold mb-6 text-cyan-400 text-center">About Miriel Systems</h2>
          <p class="mb-6">
            <span class="font-bold">Miriel Systems</span>は、2024年1月に<strong>Miriel (@mirielnet)</strong>と<strong>MilkChan (@XPMilkChan)</strong>によって設立されました。
            SNS運営を目指すグループとしてスタートし、同時にMisskeyのフォークである「Rosekey」を開発しました。
          </p>
          <p class="mb-6">
            その後、2024年9月には、Discord Bot「Lisna」の管理が<strong>Miriel (@mirielnet)</strong>から<strong>Miriel Systems</strong>に移管され、
            現在ではSNS運営、SNSシステムの開発、そしてDiscord Botの構築など、幅広い技術領域で活動しています。
          </p>
          <p>
            私たちのミッションは、「あなたと未来を繋ぐシステム」を提供することです。
            SNSやコミュニケーションツールを通じて、人々を繋げ、新しい未来を形作るための技術とサービスを創造し続けます。
          </p>
        </section>

        {/* Services Section */}
        <section class="p-8 bg-gray-800 animate-fadeInUp">
          <h2 class="text-4xl font-bold text-cyan-400 mb-6 text-center">Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div class="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:shadow-cyan-400">
              <img src="https://raw.githubusercontent.com/mirielsystems/rosekey/master/assets/rosekey.webp" alt="Rosekey" class="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 class="text-2xl font-bold mb-2">Rosekey</h3>
              <a href="https://github.com/mirielsystems/rosekey" class="text-cyan-400 underline hover:text-cyan-200">GitHub Repository</a>
            </div>
            <div class="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:shadow-cyan-400">
              <img src="https://cdn.discordapp.com/avatars/1262605965296013363/e4464e591848e6f8eae1e432583f66d5.png?size=1024" alt="Lisna" class="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 class="text-2xl font-bold mb-2">Lisna</h3>
              <a href="https://github.com/mirielnet/lisna" class="text-cyan-400 underline hover:text-cyan-200">GitHub Repository</a>
            </div>
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

export default Home;
