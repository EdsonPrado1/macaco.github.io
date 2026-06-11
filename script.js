const champions = {
    "Aatrox": ["Aatrox.png"],
    "Ahri": ["Ahri.png"],
    "Akali": ["Akali.png"],
    "Alistar": ["Alistar.png"],
    "Amumu": ["Amumu.png"],
    "Anivia": ["Anivia.png"],
    "Annie": ["Annie.png"],
    "Aphelios": ["Aphelios.png"],
    "Ashe": ["Ashe.png"],
    "Azir": ["Azir.png"],
    "Bardo": ["Bardo.png"],
    "Blitzcrank": ["Blitzcrank.png"],
    "Brand": ["Brand.png"],
    "Braum": ["Braum.png"],
    "Caitlyn": ["Caitlyn.png"],
    "Camille": ["Camille.png"],
    "Cassiopeia": ["Cassiopeia.png"],
    "Cho'Gath": ["Cho'Gath.png"],
    "Corki": ["Corki.png"],
    "Darius": ["Darius.png"],
    "Diana": ["Diana.png"],
    "Dr. Mundo": ["Dr. Mundo.png"],
    "Draven": ["Draven.png"],
    "Ekko": ["Ekko.png"],
    "Elise": ["Elise.png"],
    "Evelynn": ["Evelynn.png"],
    "Ezreal": ["Ezreal.png"],
    "Fiddlesticks": ["Fiddlesticks.png"],
    "Fiora": ["Fiora.png"],
    "Fizz": ["Fizz.png"],
    "Galio": ["Galio.png"],
    "Gangplank": ["Gangplank.png"],
    "Garen": ["Garen.png"],
    "Gnar": ["Gnar.png"],
    "Gragas": ["Gragas.png"],
    "Graves": ["Graves.png"],
    "Hecarim": ["Hecarim.png"],
    "Heimer": ["Heimerdinger.png"],
    "Illaoi": ["Illaoi.png"],
    "Irelia": ["Irelia.png"],
    "Janna": ["Janna.png"],
    "Jarvan IV": ["Jarvan IV.png"],
    "Jhin": ["Jhin.png"],
    "Jinx": ["Jinx.png"],
    "Kai'Sa": ["Kai'Sa.png"],
    "Karthus": ["Karthus.png"],
    "Kassadin": ["Kassadin.png"],
    "Katarina": ["Katarina.png"],
    "Kayle": ["Kayle.png"],
    "Kennen": ["Kennen.png"],
    "Kha'Zix": ["Kha'Zix.png"],
    "Kindred": ["Kindred.png"],
    "Kled": ["Kled.png"],
    "Xin Zhao": ["Xin Zhao.png"],
    "Kog'Maw": ["Kog'Maw.png"],
    "LeBlanc": ["Leblanc.png"],
    "Lee Sin": ["Lee Sin.png"],
    "Leona": ["Leona.png"],
    "Lillia": ["Lillia.png"],
    "Milio": ["Milio.png"],
    "Ambessa": ["Ambessa.png"],
    "Smolder": ["Smolder.png"],
    "Naafiri": ["Naafiri.png"]
};

const runes = ["Eletrucutar", "Colheita Sombria", "Chuva de Lâminas", "Aperto dos Mortos-Vivos", "Invocar Aery", "Ímpeto Gradual", 
"Agilidade nos Pés", "Ritmo Fatal", "Pós-choque", "Guardião", "Primeiro Ataque", "Cometa Arcano", "Livro de Feitiços Deslacrado", "Aprimoramento Glacial"];
const spells = ["Flash", "Curar", "Ignite", "Exaustão", "Teleporte", "Smite", "Ghost", "Barreira", "Purificar"];
const items = ["Máscara Abissal", "Cajado do Arcanjo", "Turíbulo Ardente", "Arco do Axioma", "Véu da Banshee", "Cutelo Negro", "Tocha de Chamas Negras", "Espada do Rei Destruído", "Canção de Sangue", "Sedenta por Sangue", "Oposição Celestial", "Serrespada Quimiopunk", "Ímpeto Cósmico", "Criptoflora", "Auronúcleo", "Couraça do Defunto", "Dança da Morte", "Criassonhos", "Ecos de Helia", "Eclipse", "Limiar da Noite", "Hexoplaca Experimental", "Aproximação do Inverno", "Força da Natureza", 
               "Coração Congelado", "Anjo Guardião", "Lâmina da Fúria de Guinsoo", "Coração de Aço", "Explocinturão Hextec", "Resplendor Vazio", "Foco do Horizonte", "Húbris", "Quebracascos", "Manopla dos Glacinatas", "Arco-Escudo Imortal", "Mandato Imperial", "Gume do Infinito", "Jak'Sho, o Inconstante", "Rookern Lamúrico", "Juramento do Cavaleiro", "Mata-Crákens", "Tormento de Liandry", "Perdição de Lich", "Medalhão dos Solari de Ferro", "Lembranças de Lorde Dominik", "Companheira de Luden", 
               "Malevolência", "Manamune", "Limiar da Noite", "Ladrão de Almas de Mejai", "Cimitarra Mercurial", "Bênção de Mikael", "Regenerador de Pedra Lunar", "Morellonomicon", "Lembrete Mortal", "Muramana", "Dente de Nashor", "Lâmina Oscilante de Navori", "Oportunidade", "Armadura Sangrenta de Suserano", "Dançarina Fantasma", "Hidra Profana", "Capuz da Morte de Rabadon", "Presságio de Randuin", "Canhão Fumegante", "Hidra Raivosa", "Redenção", "Cria-Fendas", "Bastão das Eras", "Furacão de Runaan", 
               "Cetro de Cristal de Rylai", "Abraço de Seraph", "Presa da Serpente", "Rancor de Serylda", "Chama Sombria", "Hino Bélico de Shurelya", "Trenó de Solstício", "Lança de Shojin", "Semblante Espiritual", "Aquafluxo", "Faca de Statikk", "Sinal de Sterak", "Ápice da Tempestade", "Quebra-Passos", "Céu Dividido", "Égide de Fogo Solar", "Terminus", "A Coletora", "Armadura de Espinhos", "Hidra Titânica", "Desbravador", "Força da Trindade", "Glaive Sombria", "Desespero Eterno", "Pedra de Vigilância Observadora", 
               "Cajado do Vazio", "Cicloespada Voltaica", "Armadura de Warmog", "Limite da Razão", "Lâmina Fantasma de Youmuu", "Flechatroz de Yun Tal", "Invadomínio de Zaz'Zak", "Convergência de Zeke", "Ampulheta de Zhonya"];

const roles = ["Top", "Jungle", "Mid", "Adc", "Sup"]; // Posições fixas

function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function sortComp() {
    const championNames = Object.keys(champions);
    const selectedChampions = [];
    const championDisplay = document.getElementById("championDisplay");
    championDisplay.innerHTML = ""; // Limpar o display antes de adicionar novos campeões

    // Selecionar 5 campeões aleatórios
    while (selectedChampions.length < 5) {
        const randomChampion = getRandomElement(championNames);
        if (!selectedChampions.includes(randomChampion)) {
            selectedChampions.push(randomChampion);
        }
    }

    // Exibir os campeões e suas informações com os papéis fixos
    selectedChampions.forEach((champion, index) => {
        const championDiv = document.createElement("div");
        championDiv.className = "champion";

        // Imagem do campeão
        const img = document.createElement("img");
        img.src = getRandomElement(champions[champion]);

        // Nome do campeão
        const name = document.createElement("h3");
        name.textContent = champion;

        // Papel do campeão
        const role = document.createElement("span");
        role.className = "role"; 
        role.textContent = `Papel: ${roles[index]}`; // Atribuir a posição correspondente

        // Detalhes (runa, feitiços, item)
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";

        const runeDiv = document.createElement("span");
        runeDiv.textContent = `Runa: ${getRandomElement(runes)}`;

        const spellDiv = document.createElement("span");
        spellDiv.textContent = `Feitiços: ${getRandomElement(spells)} + ${getRandomElement(spells)}`;

        const itemDiv = document.createElement("span");
        itemDiv.textContent = `Primeiro item: ${getRandomElement(items)}`;

        detailsDiv.appendChild(role);
        detailsDiv.appendChild(runeDiv);
        detailsDiv.appendChild(spellDiv);
        detailsDiv.appendChild(itemDiv);

        championDiv.appendChild(img);
        championDiv.appendChild(name);
        championDiv.appendChild(detailsDiv);

        championDisplay.appendChild(championDiv);
    });
}

document.getElementById("sortButton").addEventListener("click", sortComp);
