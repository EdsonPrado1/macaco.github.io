<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteador de Comp - LoL</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #121212; color: #fff; text-align: center; padding: 20px; }
        #championDisplay { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 20px; }
        .champion { background: #1e1e1e; border: 2px solid #c8aa6e; border-radius: 8px; padding: 15px; width: 200px; text-align: center; }
        .champion img { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; }
        .details span { display: block; margin: 5px 0; font-size: 14px; color: #aaa; }
        .role { font-weight: bold; color: #c8aa6e; font-size: 16px !important; margin-bottom: 10px !important; }
        button { background: #c8aa6e; color: #121212; border: none; padding: 10px 20px; font-size: 16px; font-weight: bold; cursor: pointer; border-radius: 5px; }
        button:hover { background: #f0e6d2; }
    </style>
</head>
<body>

    <h1>Gerador de Composição</h1>
    <button id="sortButton">Sortear Time</button>
    
    <div id="championDisplay"></div>

    <script>
        const champions = {
            "Aatrox": ["Aatrox.png"], "Ahri": ["Ahri.png"], "Akali": ["Akali.png"], "Alistar": ["Alistar.png"],
            "Amumu": ["Amumu.png"], "Anivia": ["Anivia.png"], "Annie": ["Annie.png"], "Aphelios": ["Aphelios.png"],
            "Ashe": ["Ashe.png"], "Azir": ["Azir.png"], "Bardo": ["Bardo.png"], "Blitzcrank": ["Blitzcrank.png"],
            "Brand": ["Brand.png"], "Braum": ["Braum.png"], "Caitlyn": ["Caitlyn.png"], "Camille": ["Camille.png"],
            "Cassiopeia": ["Cassiopeia.png"], "Cho'Gath": ["Cho'Gath.png"], "Corki": ["Corki.png"], "Darius": ["Darius.png"],
            "Diana": ["Diana.png"], "Dr. Mundo": ["Dr. Mundo.png"], "Draven": ["Draven.png"], "Ekko": ["Ekko.png"],
            "Elise": ["Elise.png"], "Evelynn": ["Evelynn.png"], "Ezreal": ["Ezreal.png"], "Fiddlesticks": ["Fiddlesticks.png"],
            "Fiora": ["Fiora.png"], "Fizz": ["Fizz.png"], "Galio": ["Galio.png"], "Gangplank": ["Gangplank.png"],
            "Garen": ["Garen.png"], "Gnar": ["Gnar.png"], "Gragas": ["Gragas.png"], "Graves": ["Graves.png"],
            "Hecarim": ["Hecarim.png"], "Heimer": ["Heimerdinger.png"], "Illaoi": ["Illaoi.png"], "Irelia": ["Irelia.png"],
            "Janna": ["Janna.png"], "Jarvan IV": ["Jarvan IV.png"], "Jhin": ["Jhin.png"], "Jinx": ["Jinx.png"],
            "Kai'Sa": ["Kai'Sa.png"], "Karthus": ["Karthus.png"], "Kassadin": ["Kassadin.png"], "Katarina": ["Katarina.png"],
            "Kayle": ["Kayle.png"], "Kennen": ["Kennen.png"], "Kha'Zix": ["Kha'Zix.png"], "Kindred": ["Kindred.png"],
            "Kled": ["Kled.png"], "Xin Zhao": ["Xin Zhao.png"], "Kog'Maw": ["Kog'Maw.png"], "LeBlanc": ["Leblanc.png"],
            "Lee Sin": ["Lee Sin.png"], "Leona": ["Leona.png"], "Lillia": ["Lillia.png"], "Milio": ["Milio.png"],
            "Ambessa": ["Ambessa.png"], "Smolder": ["Smolder.png"], "Naafiri": ["Naafiri.png"]
        };

        const runes = [
            "Eletrocutar", "Colheita Sombria", "Chuva de Lâminas", "Aperto dos Mortos-Vivos", "Invocar Aery", 
            "Ímpeto Gradual", "Agilidade nos Pés", "Ritmo Fatal", "Pós-choque", "Guardião", "Primeiro Ataque", 
            "Cometa Arcano", "Livro de Feitiços Deslacrado", "Aprimoramento Glacial"
        ];
        
        const spells = ["Flash", "Curar", "Incendiar", "Exaustão", "Teleporte", "Golpear", "Fantasma", "Barreira", "Purificar"];
        
        const items = [
            "Máscara Abissal", "Cajado do Arcanjo", "Turíbulo Ardente", "Arco do Axioma", "Véu da Banshee", "Cutelo Negro", 
            "Tocha de Chamas Negras", "Espada do Rei Destruído", "Canção de Sangue", "Sedenta por Sangue", "Oposição Celestial", 
            "Serrespada Quimiopunk", "Ímpeto Cósmico", "Criptoflora", "Auronúcleo", "Couraça do Defunto", "Dança da Morte", 
            "Criassonhos", "Ecos de Helia", "Eclipse", "Limiar da Noite", "Hexoplaca Experimental", "Aproximação do Inverno", 
            "Força da Natureza", "Coração Congelado", "Anjo Guardião", "Lâmina da Fúria de Guinsoo", "Coração de Aço", 
            "Explocinturão Hextec", "Resplendor Vazio", "Foco do Horizonte", "Húbris", "Quebracascos", "Manopla dos Glacinatas", 
            "Arco-Escudo Imortal", "Mandato Imperial", "Gume do Infinito", "Jak'Sho, o Inconstante", "Rookern Lamúrico", 
            "Juramento do Cavaleiro", "Mata-Crákens", "Tormento de Liandry", "Perdição de Lich", "Medalhão dos Solari de Ferro", 
            "Lembranças de Lorde Dominik", "Companheira de Luden", "Malevolência", "Manamune", "Limiar da Noite", 
            "Ladrão de Almas de Mejai", "Cimitarra Mercurial", "Bênção de Mikael", "Regenerador de Pedra Lunar", 
            "Morellonomicon", "Lembrete Mortal", "Muramana", "Dente de Nashor", "Lâmina Oscilante de Navori", "Oportunidade", 
            "Armadura Sangrenta de Suserano", "Dançarina Fantasma", "Hidra Profana", "Capuz da Morte de Rabadon", 
            "Presságio de Randuin", "Canhão Fumegante", "Hidra Raivosa", "Redenção", "Cria-Fendas", "Bastão das Eras", 
            "Furacão de Runaan", "Cetro de Cristal de Rylai", "Abraço de Seraph", "Presa da Serpente", "Rancor de Serylda", 
            "Chama Sombria", "Hino Bélico de Shurelya", "Trenó de Solstício", "Lança de Shojin", "Semblante Espiritual", 
            "Aquafluxo", "Faca de Statikk", "Sinal de Sterak", "Ápice da Tempestade", "Quebra-Passos", "Céu Dividido", 
            "Égide de Fogo Solar", "Terminus", "A Coletora", "Armadura de Espinhos", "Hidra Titânica", "Desbravador", 
            "Força da Trindade", "Glaive Sombria", "Desespero Eterno", "Pedra de Vigilância Observadora", "Cajado do Vazio", 
            "Cicloespada Voltaica", "Armadura de Warmog", "Limite da Razão", "Lâmina Fantasma de Youmuu", "Flechatroz de Yun Tal", 
            "Invadomínio de Zaz'Zak", "Convergência de Zeke", "Ampulheta de Zhonya"
        ];

        const roles = ["Top", "Jungle", "Mid", "Adc", "Sup"];

        function getRandomElement(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        // Função auxiliar para pegar dois feitiços diferentes
        function getRandomSpells() {
            let spell1 = getRandomElement(spells);
            let spell2 = getRandomElement(spells);
            
            // Garante que o segundo feitiço seja diferente do primeiro
            while (spell1 === spell2) {
                spell2 = getRandomElement(spells);
            }
            return `${spell1} + ${spell2}`;
        }

        function sortComp() {
            const championNames = Object.keys(champions);
            const selectedChampions = [];
            const championDisplay = document.getElementById("championDisplay");
            
            championDisplay.innerHTML = ""; // Limpa o display antes de adicionar novos campeões

            // Selecionar 5 campeões aleatórios únicos
            while (selectedChampions.length < 5) {
                const randomChampion = getRandomElement(championNames);
                if (!selectedChampions.includes(randomChampion)) {
                    selectedChampions.push(randomChampion);
                }
            }

            // Exibir os campeões
            selectedChampions.forEach((champion, index) => {
                const championDiv = document.createElement("div");
                championDiv.className = "champion";

                // Imagem do campeão
                const img = document.createElement("img");
                img.src = champions[champion][0]; // Pega a string da imagem do array
                img.alt = champion;
                // Fallback caso a imagem não exista localmente:
                img.onerror = function() {
                    this.src = "https://via.placeholder.com/100?text=Sem+Foto"; 
                };

                // Nome do campeão
                const name = document.createElement("h3");
                name.textContent = champion;

                // Detalhes
                const detailsDiv = document.createElement("div");
                detailsDiv.className = "details";

                const roleDiv = document.createElement("span");
                roleDiv.className = "role"; 
                roleDiv.textContent = `Rota: ${roles[index]}`; 

                const runeDiv = document.createElement("span");
                runeDiv.textContent = `Runa: ${getRandomElement(runes)}`;

                const spellDiv = document.createElement("span");
                spellDiv.textContent = `Feitiços: ${getRandomSpells()}`;

                const itemDiv = document.createElement("span");
                itemDiv.textContent = `1º Item: ${getRandomElement(items)}`;

                // Montar o card do campeão
                detailsDiv.appendChild(roleDiv);
                detailsDiv.appendChild(runeDiv);
                detailsDiv.appendChild(spellDiv);
                detailsDiv.appendChild(itemDiv);

                championDiv.appendChild(img);
                championDiv.appendChild(name);
                championDiv.appendChild(detailsDiv);

                championDisplay.appendChild(championDiv);
            });
        }

        // Garante que o script só rode depois que a página carregar
        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("sortButton").addEventListener("click", sortComp);
        });
    </script>
</body>
</html>
