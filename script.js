
const planetData = 
    [
        {
        "name": "Mercury",
        "overview": {
            "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
        },
        "structure": {
            "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
        },
        "geology": {
            "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
        },
        "rotation": "58.6 Days",
        "revolution": "87.97 Days",
        "radius": "2,439.7 KM",
        "temperature": "430°c",
        "images": {
            "planet": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/3154731d2fa14c94abd86246f03687c5.svg",
            "internal": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/b76c496b74b14b218992482c323bbe6e.svg",
            "geology": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c516c12d6ece4150bacff4840a4ef850.png"
        }
        },
        {
        "name": "Venus",
        "overview": {
            "content": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            "source": "https://en.wikipedia.org/wiki/Venus"
        },
        "structure": {
            "content": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
            "source": "https://en.wikipedia.org/wiki/Venus#Internal_structure"
        },
        "geology": {
            "content": "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
            "source": "https://en.wikipedia.org/wiki/Venus#Surface_geology"
        },
        "rotation": "243 Days",
        "revolution": "224.7 Days",
        "radius": "6,051.8 KM",
        "temperature": "471°c",
        "images": {
            "planet": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/32acc57790214d58a141f4a0c3908085.svg",
            "internal": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/763be001d9fe41fbb8a83ee81c76af56.svg",
            "geology": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/369d7374f48048289afcfd45e879e37b.png"
        }
        },
        {
        "name": "Earth",
        "overview": {
            "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            "source": "https://en.wikipedia.org/wiki/Earth"
        },
        "structure": {
            "content": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
            "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
        },
        "geology": {
            "content": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
            "source": "https://en.wikipedia.org/wiki/Earth#Surface"
        },
        "rotation": "0.99 Days",
        "revolution": "365.26 Days",
        "radius": "6,371 KM",
        "temperature": "16°c",
        "images": {
            "planet": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/b43137ec56a0445396d1139e12e059b0.svg",
            "internal": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/96cd18b74a114c52b24c7879a8ec497d.svg",
            "geology": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/f98abf7caeb84229b343be92a5697568.png"
        }
        },
        {
        "name": "Mars",
        "overview": {
            "content": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
            "source": "https://en.wikipedia.org/wiki/Mars"
        },
        "structure": {
            "content": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
            "source": "https://en.wikipedia.org/wiki/Mars#Internal_structure"
        },
        "geology": {
            "content": "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
            "source": "https://en.wikipedia.org/wiki/Mars#Surface_geology"
        },
        "rotation": "1.03 Days",
        "revolution": "1.88 Years",
        "radius": "3,389.5 KM",
        "temperature": "-28°c",
        "images": {
            "planet": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/76cc10b111a448de978c167dcc1be30e.svg",
            "internal": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/7b30095f86344558936cb443cced5080.svg",
            "geology": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/70061cc4d5ee4ec08cdf8b61a71491eb.png"
        }
        },
        {
        "name": "Jupiter",
        "overview": {
            "content": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            "source": "https://en.wikipedia.org/wiki/Jupiter"
        },
        "structure": {
            "content": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
            "source": "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
        },
        "geology": {
            "content": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
            "source": "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
        },
        "rotation": "9.93 Hours",
        "revolution": "11.86 Years",
        "radius": "69,911 KM",
        "temperature": "-108°c",
        "images": {
            "planet": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/b275738562d640e6a5e60e43da6504d3.svg",
            "internal": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/67c54e04fcc1485eb44836bd696de12f.svg",
            "geology": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/fc3c8e2f277d4724a04d9b30b3e82cb7.png"
        }
        },
        {
        "name": "Saturn",
        "overview": {
            "content": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            "source": "https://en.wikipedia.org/wiki/Saturn"
        },
        "structure": {
            "content": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
            "source": "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
        },
        "geology": {
            "content": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
            "source": "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
        },
        "rotation": "10.8 Hours",
        "revolution": "29.46 Years",
        "radius": "58,232 KM",
        "temperature": "-138°c",
        "images": {
            "planet": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/427b48cdd00c4fe889458e4cc90de3c4.svg",
            "internal": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/6de8f12b8453473791a3b458b63d67ea.svg",
            "geology": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/5c8a0fb14b5a4b6cafb347b116e7ee80.png"
        }
        },
        {
        "name": "Uranus",
        "overview": {
            "content": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            "source": "https://en.wikipedia.org/wiki/Uranus"
        },
        "structure": {
            "content": "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
            "source": "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
        },
        "geology": {
            "content": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            "source": "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
        },
        "rotation": "17.2 Hours",
        "revolution": "84 Years",
        "radius": "25,362 KM",
        "temperature": "-195°c",
        "images": {
            "planet": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/19021fc60ec54e53b0ed6bb01f3e004b.svg",
            "internal": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/7990235c21a440a3b675036ca3fcb6cc.svg",
            "geology": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/ba5d7bf1b00844ac99053090b11cde6d.png"
        }
        },
        {
        "name": "Neptune",
        "overview": {
            "content": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
            "source": "https://en.wikipedia.org/wiki/Neptune"
        },
        "structure": {
            "content": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
            "source": "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
        },
        "geology": {
            "content": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
            "source": "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
        },
        "rotation": "16.08 Hours",
        "revolution": "164.79 Years",
        "radius": "24,622 KM",
        "temperature": "-201°c",
        "images": {
            "planet": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/26c9827cfc3340eabdf84f02aeffdd06.svg",
            "internal": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/05deecc4a92f4318bbf0115a6b74ba4e.svg",
            "geology": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/91595cc19a56428e9c795dbcc3f9d346.png"
        }
        }
    ];
      

      
      document.addEventListener('DOMContentLoaded', function () {
        const planetSections = document.querySelectorAll('.planet');
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('nav ul');
        const navLinks = document.querySelectorAll('nav ul li a');
      
        navToggle.addEventListener('click', function () {
          navMenu.classList.toggle('show');
        });
      
        function showPlanetSection(planetName, tab = 'overview') {
          planetSections.forEach(section => {
            section.style.display = 'none';
          });
      
          const planet = planetData.find(p => p.name.toLowerCase() === planetName.toLowerCase());
          if (planet) {
            const planetSection = document.querySelector(`#${planetName.toLowerCase()}`);
            planetSection.style.display = 'block';
      
            const overviewContent = planetSection.querySelector('.overview-content');
            const overviewSource = planetSection.querySelector('#overview .source');
            const structureContent = planetSection.querySelector('.structure-content');
            const structureSource = planetSection.querySelector('#structure .source');
            const geologyContent = planetSection.querySelector('.geology-content');
            const geologySource = planetSection.querySelector('#geology .source');
            const rotation = planetSection.querySelector('.rotation');
            const revolution = planetSection.querySelector('.revolution');
            const radius = planetSection.querySelector('.radius');
            const temperature = planetSection.querySelector('.temperature');
            const planetImg = planetSection.querySelectorAll('.planet-img');
            const tabBtns = planetSection.querySelectorAll('.tab-btn');
            const tabContents = planetSection.querySelectorAll('.tab');
      
            overviewContent.textContent = planet.overview.content;
            overviewSource.innerHTML = `Source: <a href="${planet.overview.source}" target="_blank">Wikipedia</a>`;
            structureContent.textContent = planet.structure.content;
            structureSource.innerHTML = `Source: <a href="${planet.structure.source}" target="_blank">Wikipedia</a>`;
            geologyContent.textContent = planet.geology.content;
            geologySource.innerHTML = `Source: <a href="${planet.geology.source}" target="_blank">Wikipedia</a>`;
            rotation.textContent = planet.rotation;
            revolution.textContent = planet.revolution;
            radius.textContent = planet.radius;
            temperature.textContent = `${planet.temperature}°C`;
      
            planetImg.forEach((img, i) => {
              switch (i) {
                case 0:
                  img.src = planet.images[tab] || planet.images.planet;
                  break;
                case 1:
                  img.src = planet.images[tab] || planet.images.internal;
                  break;
                case 2:
                  img.src = planet.images[tab] || planet.images.geology;
                  break;
                default:
                  break;
              }
            });
      
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
      
            const selectedTabBtn = planetSection.querySelector(`.tab-btn[data-tab="${tab}"]`);
            selectedTabBtn.classList.add('active');
      
            const selectedTabContent = planetSection.querySelector(`#${tab}`);
            selectedTabContent.classList.add('active');
          }
        }
      
        navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const planetName = link.textContent;
            showPlanetSection(planetName);
          });
        });
      
        showPlanetSection('Earth', 'overview');
        
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const planetSection = btn.closest('.planet');
            const planetName = planetSection.querySelector('h2').textContent;
            const tab = btn.dataset.tab;
            showPlanetSection(planetName, tab);
          });
        });
      });
