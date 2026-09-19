const modal = document.getElementById("modal");
const openModal1 = document.getElementById("openModal1");
const openModal2 = document.getElementById("openModal2");
const closeModal = document.getElementById("closeModal");

// Abrir modal
openModal1.onclick = function () {
  modal.style.display = "flex";

  // Bloqueia a rolagem da página
  document.body.style.overflow = "hidden";
};
openModal2.onclick = function () {
  modal.style.display = "flex";

  // Bloqueia a rolagem da página
  document.body.style.overflow = "hidden";
};

// Fechar modal
closeModal.onclick = function () {
  modal.style.display = "none";

  // Libera a rolagem da página
  document.body.style.overflow = "";
};

// Fechar clicando fora
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";

    // Libera a rolagem
    document.body.style.overflow = "";
  }
};


openModal1.addEventListener("click", function(){

    
    const conteudo = document.getElementById("termos-conteudo");
    const titolo = document.getElementById("titulo-termo");

    titolo.innerHTML = `TERMOS DE USO — SPOT MAP `;
    conteudo.innerHTML=`   
11 de setembro de 2026 <br>
Bem-vindo à Spot Map, uma plataforma digital voltada para pessoas interessadas em esportes, atividades esportivas e interação com a comunidade.
Ao acessar, criar uma conta ou utilizar a Spot Map, você declara que leu, compreendeu e concorda com estes Termos de Uso. Caso não concorde com alguma das condições apresentadas, recomendamos que não utilize a plataforma.<br><br>
1. Sobre a Spot Map<br>
A Spot Map é uma rede social esportiva que busca conectar pessoas interessadas em diferentes modalidades esportivas, permitindo a criação de interações, publicações, conversas, comunidades e outras experiências relacionadas ao esporte.
Entre as funcionalidades da plataforma podem estar disponíveis:<br>
criação e gerenciamento de perfil;<br>
publicação e compartilhamento de conteúdos;<br>
curtidas, comentários e outras interações;<br>
chats e conversas entre usuários;<br>
criação ou participação em grupos e comunidades;<br>
descoberta de pessoas, locais, eventos e atividades esportivas;<br>
integração ou divulgação de lojas e produtos relacionados ao esporte;<br>
funcionalidades baseadas em localização;<br>
recursos de interação ou comunicação em tempo real;<br>
outras funcionalidades que venham a ser disponibilizadas pela Spot Map.<br>
A Spot Map poderá criar, modificar, suspender ou descontinuar funcionalidades da plataforma, sempre observando a legislação aplicável e, quando necessário, comunicando os usuários.<br><br>
2. Cadastro e conta<br>
Para utilizar determinadas funcionalidades, poderá ser necessário criar uma conta.<br>
O usuário se compromete a fornecer informações verdadeiras, atualizadas e completas e a manter seus dados de acesso protegidos.<br>
Cada usuário é responsável pelas atividades realizadas por meio de sua conta e deve comunicar à Spot Map qualquer utilização não autorizada ou suspeita de acesso indevido.<br><br>
3. Uso da plataforma<br>
A Spot Map deve ser utilizada de maneira legal, responsável e respeitosa.<br>
É proibido utilizar a plataforma para:<br>
praticar atividades ilícitas;<br>
ameaçar, assediar, perseguir ou intimidar outras pessoas;<br>
publicar conteúdo ilegal, fraudulento ou que viole direitos de terceiros;<br>
disseminar spam ou mensagens abusivas;<br>
tentar obter acesso não autorizado a contas ou sistemas;<br>
utilizar mecanismos automatizados para prejudicar o funcionamento da plataforma;<br>
distribuir vírus, códigos maliciosos ou outros mecanismos que possam comprometer sistemas;<br>
criar perfis falsos com a finalidade de enganar outros usuários;<br>
utilizar a plataforma para atividades que possam causar danos a outras pessoas ou à própria Spot Map.<br>
A Spot Map poderá adotar medidas sobre contas ou conteúdos que violem estes Termos ou a legislação aplicável.<br><br>
4. Conteúdo publicado pelos usuários<br>
Os usuários poderão publicar textos, imagens, vídeos, comentários e outros conteúdos.<br>
O usuário continua responsável pelo conteúdo que publica e declara possuir os direitos necessários para utilizá-lo e compartilhá-lo.<br>
Ao publicar conteúdo na Spot Map, o usuário concede à plataforma uma licença não exclusiva, conforme necessária para hospedar, armazenar, reproduzir, exibir e disponibilizar esse conteúdo dentro das funcionalidades da plataforma.<br>
A Spot Map não assume propriedade sobre conteúdos que pertençam aos usuários.<br><br>
5. Interações entre usuários<br>
A Spot Map oferece ferramentas para que usuários possam interagir entre si.<br>
A plataforma não garante que as informações fornecidas por outros usuários sejam verdadeiras ou que todas as interações realizadas sejam seguras.<br>
O usuário deve exercer cautela ao compartilhar informações pessoais, realizar encontros presenciais ou estabelecer qualquer tipo de relação ou compromisso com outras pessoas conhecidas por meio da plataforma.<br><br>
6. Comunicação em tempo real<br>
Algumas funcionalidades poderão permitir comunicação ou interação em tempo real.<br>
A disponibilidade dessas funcionalidades poderá depender de conexão com a internet, localização, dispositivo, disponibilidade dos servidores ou outros fatores técnicos.<br>
A Spot Map não garante disponibilidade ininterrupta de todos os recursos em tempo real.<br><br>
7. Localização e recursos relacionados a mapas<br>
Determinadas funcionalidades da Spot Map poderão utilizar informações de localização para apresentar locais, atividades, eventos, usuários ou outros recursos relacionados ao esporte.<br>
O tratamento de dados de localização será realizado conforme a Política de Privacidade da Spot Map e as permissões concedidas pelo usuário.<br><br>
8. Lojas, produtos e serviços<br>
A Spot Map poderá disponibilizar espaços para lojas, produtos, serviços ou ofertas relacionadas ao esporte.<br>
Quando uma compra for realizada por meio de terceiros, a relação comercial poderá ocorrer diretamente entre o usuário e o respectivo vendedor.<br><br>
A Spot Map poderá estabelecer regras específicas para vendedores, lojas e parceiros.<br><br>
9. Pagamentos<br>
Caso sejam disponibilizados produtos, serviços, assinaturas ou outras funcionalidades pagas, poderão existir condições específicas de preço, cobrança, cancelamento e reembolso.<br>
Essas condições serão apresentadas ao usuário antes da contratação, quando aplicável.<br><br>
10. Propriedade intelectual<br>
A marca Spot Map, seu nome, identidade visual, software, código, design, interfaces, textos, elementos gráficos e demais materiais pertencentes à plataforma são protegidos pela legislação aplicável.<br>
Salvo autorização expressa, o usuário não poderá copiar, modificar, distribuir, vender ou explorar comercialmente esses elementos.<br><br>
11. Segurança<br>
A Spot Map adota medidas técnicas e organizacionais destinadas a proteger a plataforma e os dados tratados.<br>
Entretanto, nenhum sistema conectado à internet pode garantir segurança absoluta.<br>
O usuário também é responsável por adotar medidas de segurança, como manter sua senha protegida e não compartilhar suas credenciais.<br><br>
12. Suspensão ou encerramento<br>
A Spot Map poderá restringir, suspender ou encerrar contas quando houver indícios de violação destes Termos, da legislação aplicável ou de outras regras da plataforma.<br>
Quando apropriado, poderão ser adotadas medidas proporcionais à situação.<br><br>
13. Alterações destes Termos<br>
Estes Termos poderão ser atualizados para refletir mudanças na plataforma, na legislação ou em nossos serviços.<br>
Quando houver alterações relevantes, a Spot Map poderá comunicar os usuários por meios apropriados.<br><br>
14. Limitação de responsabilidade<br>
A Spot Map busca oferecer uma experiência segura e funcional, mas não garante que a plataforma estará permanentemente disponível ou livre de falhas.<br>
A Spot Map também não se responsabiliza por condutas praticadas por usuários ou terceiros fora de seu controle, observadas as responsabilidades previstas na legislação aplicável.<br><br>
15. Contato<br>
Caso tenha dúvidas sobre estes Termos de Uso, o usuário poderá entrar em contato com a Spot Map por meio dos canais oficiais disponibilizados na plataforma.<br><br>
16. Aceitação<br>
Ao criar uma conta ou utilizar a Spot Map, o usuário declara estar de acordo com estes Termos de Uso.<br>
    `;

});

openModal2.addEventListener("click", function(){

    
    const conteudo = document.getElementById("termos-conteudo");
    const titolo = document.getElementById("titulo-termo");

    titolo.innerHTML = `POLÍTICA DE PRIVACIDADE — SPOT MAP `;
    conteudo.innerHTML=`
      Última atualização: 11 de setembro de 2026<br><br>
A Spot Map valoriza a privacidade de seus usuários e busca tratar dados pessoais de forma transparente, segura e responsável.<br>
Esta Política de Privacidade explica quais informações podem ser coletadas quando você utiliza a Spot Map, como essas informações podem ser utilizadas, com quem podem ser compartilhadas e quais são os direitos dos titulares de dados.<br><br>
1. Quem somos<br>
A Spot Map é uma plataforma digital e rede social voltada para pessoas interessadas em esportes e atividades relacionadas ao universo esportivo.<br>
Por meio da plataforma, os usuários podem interagir, publicar conteúdos, conversar, descobrir atividades e locais, utilizar recursos de localização e acessar outras funcionalidades relacionadas ao esporte.<br><br>
2. Dados que podemos coletar<br>
Dependendo de como você utiliza a plataforma, podemos coletar diferentes categorias de informações, incluindo:<br>
Dados de cadastro<br>
nome;<br>
nome de usuário;<br>
endereço de e-mail;<br>
número de telefone, quando solicitado;<br>
data de nascimento, quando necessária;<br>
senha, armazenada de forma protegida;<br>
foto de perfil e outras informações fornecidas pelo usuário.<br>
Dados de utilização<br>
Podemos coletar informações relacionadas à utilização da Spot Map, como:<br>
páginas e funcionalidades acessadas;<br>
interações realizadas;<br>
curtidas;<br>
comentários;<br>
informações sobre publicações;<br>
informações técnicas do dispositivo;<br>
endereço IP;<br>
data e horário de acesso;<br>
informações relacionadas ao funcionamento e segurança da plataforma.<br>
Dados de localização<br>
Algumas funcionalidades poderão solicitar acesso à localização do dispositivo.<br>
Essas informações poderão ser utilizadas para funcionalidades relacionadas a mapas, descoberta de locais, atividades esportivas, eventos, estabelecimentos ou outros recursos oferecidos pela Spot Map.<br>
O acesso à localização dependerá das permissões disponíveis no dispositivo e das escolhas realizadas pelo usuário.<br><br>
3. Como utilizamos os dados<br>
Os dados poderão ser utilizados para:<br>
criar e administrar contas;<br>
disponibilizar funcionalidades da Spot Map;<br>
permitir interações entre usuários;<br>
disponibilizar chats e comunicações;<br>
apresentar conteúdos e funcionalidades relacionados ao esporte;<br>
disponibilizar recursos baseados em localização;<br>
processar compras e pagamentos, quando aplicável;<br>
melhorar a experiência do usuário;<br>
desenvolver e aprimorar nossos produtos e serviços;<br>
identificar e prevenir fraudes, abusos e atividades ilícitas;<br>
garantir a segurança da plataforma;<br>
cumprir obrigações legais ou regulatórias;<br>
exercer ou defender direitos em processos administrativos, judiciais ou arbitrais, quando aplicável.<br><br>
4. Compartilhamento de dados<br>
Os dados pessoais poderão ser compartilhados quando necessário para o funcionamento da plataforma, inclusive com prestadores de serviços e parceiros que auxiliem em atividades como:<br>
hospedagem e armazenamento;<br>
processamento de pagamentos;<br>
segurança;<br>
análise e monitoramento de desempenho;<br>
envio de comunicações;<br>
suporte técnico;<br>
funcionamento de mapas e serviços de localização.<br>
Também poderemos compartilhar informações quando houver obrigação legal, ordem de autoridade competente ou necessidade de proteção de direitos.<br><br>
5. Conteúdo público<br>
Algumas informações e conteúdos publicados pelo usuário poderão ser disponibilizados publicamente ou para outros usuários, dependendo das configurações de privacidade e das funcionalidades utilizadas<br>
Antes de publicar qualquer conteúdo, recomendamos verificar quem poderá visualizá-lo.<br><br>
6. Cookies e tecnologias semelhantes<br>
A Spot Map poderá utilizar cookies e tecnologias semelhantes para permitir o funcionamento da plataforma, melhorar a experiência do usuário, analisar utilização e aprimorar nossos serviços.<br>
O usuário poderá ter opções de gerenciamento de cookies por meio das configurações do navegador ou do próprio serviço, quando disponíveis.<br><br>
7. Segurança<br>
Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados pessoais contra acessos não autorizados, perda, alteração, divulgação ou destruição indevida.<br>
Apesar dessas medidas, nenhum sistema é completamente seguro.<br><br>
8. Armazenamento e retenção<br>
Os dados pessoais poderão ser armazenados durante o período necessário para cumprir as finalidades descritas nesta Política, cumprir obrigações legais, resolver disputas e exercer ou defender direitos.<br>
Os períodos de retenção poderão variar de acordo com o tipo de dado e sua finalidade.<br><br>
9. Direitos dos titulares<br>
Nos termos da legislação aplicável, especialmente da LGPD quando aplicável, o titular poderá exercer direitos relacionados aos seus dados pessoais, incluindo, conforme o caso:<br>
confirmação da existência de tratamento;<br>
acesso aos dados;<br>
correção de informações incompletas ou incorretas;<br>
anonimização, bloqueio ou eliminação, quando aplicável;<br>
portabilidade, observados os requisitos legais;<br>
informações sobre compartilhamento;<br>
revogação do consentimento, quando o tratamento estiver baseado nessa hipótese;<br>
demais direitos previstos na legislação aplicável.<br><br>
10. Privacidade de crianças e adolescentes<br>
A Spot Map poderá estabelecer requisitos de idade para utilização de determinados recursos.<br>
Quando houver tratamento de dados de crianças e adolescentes, serão observadas as regras e proteções previstas na legislação aplicável.<br><br>
11. Alterações desta Política<br>
Esta Política de Privacidade poderá ser atualizada periodicamente para refletir alterações na plataforma, nos processos de tratamento de dados ou na legislação.<br>
Quando necessário, comunicaremos alterações relevantes aos usuários.<br>
12. Contato<br><br>
Para dúvidas, solicitações ou assuntos relacionados à privacidade e proteção de dados, o usuário poderá utilizar os canais oficiais de contato disponibilizados pela Spot Map.<br><br>
13. Aceitação<br>
Ao utilizar a Spot Map, o usuário declara estar ciente desta Política de Privacidade.<br>
Quando determinado tratamento exigir consentimento, o consentimento será solicitado de acordo com a legislação aplicável.<br>
    `;

});