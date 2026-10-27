
import Phaser from "phaser";

export function drawRichmondBackground(scene: Phaser.Scene) {
  const g = scene.add.graphics();
  g.setDepth(-5);

  // AUTUMN SKY
  g.fillStyle(0x9cc9e4);
  g.fillRect(0, 0, 800, 460);

  // Soft clouds
  g.fillStyle(0xf9e9db);
  [
    [90, 65],
    [360, 85],
    [640, 45],
  ].forEach(([x, y]) => {
    g.fillRect(x, y, 90, 12);
    g.fillRect(x + 18, y - 12, 50, 12);
  });

  // DISTANT GREEN MOUNTAINS
  g.fillStyle(0x7d9b83);
  g.fillTriangle(-100, 335, 180, 145, 420, 335);
  g.fillTriangle(260, 335, 580, 125, 920, 335);

  // COCHRAN'S SKI MOUNTAIN
  // Forested hillside on the right
  g.fillStyle(0x365c43);
  g.fillTriangle(390, 365, 665, 140, 940, 365);

  // Ski run: pale grass winding down the hillside
  g.fillStyle(0xaac88a);
  g.fillTriangle(655, 155, 680, 155, 735, 365);
  g.fillTriangle(655, 155, 735, 365, 690, 365);

  // Ski lift towers
  g.lineStyle(3, 0x4a4545);
  g.lineBetween(690, 205, 715, 355);
  g.lineBetween(675, 210, 725, 210);

  // AUTUMN FOREST
  const foliage = [
    0xe77c32, // orange
    0xc74b35, // red
    0xe5b64b, // gold
    0x71954a, // green
    0xb85d37, // rust
  ];

  const tree = (
    x: number,
    y: number,
    size: number,
    color: number
  ) => {
    g.fillStyle(0x67472e);
    g.fillRect(x - 4, y - size / 2, 8, size / 2);

    g.fillStyle(color);
    g.fillRect(x - size / 2, y - size, size, size / 2);
    g.fillRect(x - size / 3, y - size - 12, size * 0.66, 16);
    g.fillRect(x - size / 2 - 8, y - size + 12, 18, 22);
    g.fillRect(x + size / 2 - 10, y - size + 8, 18, 22);
  };

  // Distant forest line
  for (let i = 0; i < 28; i++) {
    const x = i * 32;
    const y = 315 + (i % 3) * 8;
    tree(x, y, 30 + (i % 4) * 6, foliage[i % foliage.length]);
  }

  // VILLAGE GROUND
  g.fillStyle(0x68834b);
  g.fillRect(0, 340, 800, 120);

  // THE ROUND CHURCH
  // Approximate its distinctive polygonal footprint
  const cx = 235;
  const top = 250;

  // Dark multi-sided roof
  g.fillStyle(0x484a52);
  g.fillTriangle(cx - 105, top, cx, top - 75, cx + 105, top);
  g.fillRect(cx - 90, top - 8, 180, 12);

  // Faceted pale walls
  g.fillStyle(0xf3e8d3);
  g.fillRect(cx - 85, top, 170, 115);

  g.fillStyle(0xd9c9ae);
  g.fillTriangle(cx - 105, top + 15, cx - 85, top, cx - 85, top + 115);
  g.fillTriangle(cx + 85, top, cx + 105, top + 15, cx + 85, top + 115);

  // Vertical edges emphasize the multi-sided building
  g.lineStyle(3, 0xb8aa93);
  g.lineBetween(cx - 55, top, cx - 55, top + 115);
  g.lineBetween(cx + 55, top, cx + 55, top + 115);

  // Windows
  g.fillStyle(0x506b78);
  for (const x of [cx - 65, cx - 25, cx + 25, cx + 65]) {
    g.fillRect(x - 7, top + 35, 14, 32);
  }

  // Entrance
  g.fillStyle(0x705c4b);
  g.fillRect(cx - 15, top + 75, 30, 40);

  // Small central cupola
  g.fillStyle(0xf3e8d3);
  g.fillRect(cx - 17, top - 95, 34, 32);
  g.fillStyle(0x484a52);
  g.fillTriangle(cx - 24, top - 95, cx, top - 120, cx + 24, top - 95);

  // Foreground autumn trees
  tree(55, 395, 85, 0xd96c31);
  tree(445, 395, 70, 0xe3a63c);
  tree(755, 395, 85, 0xc75035);

  // GRASS PLATFORM
  g.fillStyle(0x53743c);
  g.fillRect(0, 450, 800, 10);
  g.fillStyle(0xa2c866);
  g.fillRect(0, 450, 800, 4);
}
