
"use client";

import { useEffect, useRef } from "react";
import { drawRichmondBackground } from "./RichmondBackground";

export default function ArcadeGame() {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let game: import("phaser").Game | undefined;
    let cancelled = false;

    async function startGame() {
      const Phaser = (await import("phaser")).default;

      if (cancelled || !gameRef.current) return;

      class ArcadeScene extends Phaser.Scene {
        private player!: Phaser.GameObjects.Sprite;
        private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
        private memoryOpen = false;
        private memoryPanel?: Phaser.GameObjects.Container;
        private wasd!: {
          A: Phaser.Input.Keyboard.Key;
          D: Phaser.Input.Keyboard.Key;
        };

        constructor() {
          super("ArcadeScene");
        }

        create() {
          this.cameras.main.setBackgroundColor("#080808");
            drawRichmondBackground(this);
          // Arcade heading
          this.add
            .text(400, 50, "LIFE IN PROGRESS", {
              fontFamily: "monospace",
              fontSize: "32px",
              color: "#b6ff5c",
            })
            .setOrigin(0.5);

          this.add
            .text(400, 95, "PLAYER ONE  -  VERMONT 2005", {
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#ffffff",
            })
            .setOrigin(0.5);

          // Ground
          this.add.rectangle(
            400,
            460,
            800,
            8,
            0xb6ff5c
          );

          // Player character
          
const pixel = 4;

// 8-bit girl with blonde curls and a pink outfit
const sprite = [
  "...YYY.YYY...",
  "..YYYYYYYYY..",
  ".YY.YYYYY.YY.",
  ".Y.YYYYYYY.Y.",
  ".YYSSSSSSSYY.",
  ".YSSKSSSKSSY.",
  ".YYSSSSSSSYY.",
  "..YSSSMSSSY..",
  "...YSSSSSY...",
  "....PPPPP....",
  "...PPPPPPP...",
  "..PPWPPPWPP..",
  "..PPPPPPPPP..",
  "...PPPPPPP...",
  "....DDDDD....",
  "....DDDDD....",
  "....DD.DD....",
  "....DD.DD....",
  "...PPP.PPP...",
];

const colors: Record<string, number> = {
  Y: 0xffd447, // Blonde curly hair
  S: 0xf2bd91, // Skin
  K: 0x241c20, // Eyes
  M: 0xd66b84, // Smile
  P: 0xff69b4, // Pink outfit and shoes
  W: 0xffc0dc, // Light pink shirt detail
  D: 0x6555aa, // Purple pants
};

const spriteWidth = Math.max(...sprite.map((row) => row.length));

const graphics = this.add.graphics();

sprite.forEach((row, y) => {
  [...row].forEach((char, x) => {
    if (colors[char] !== undefined) {
      graphics.fillStyle(colors[char]);
      graphics.fillRect(
        x * pixel,
        y * pixel,
        pixel,
        pixel
      );
    }
  });
});

graphics.generateTexture(
  "player",
  spriteWidth * pixel,
  sprite.length * pixel
);

graphics.destroy();

this.player = this.add.sprite(100, 425, "player");
this.player.setDepth(10);



const checkpointX = 520;


const checkpoint = this.add.graphics();
checkpoint.setDepth(5);

// Pink arcade checkpoint
checkpoint.fillStyle(0x704e94);
checkpoint.fillRect(checkpointX - 25, 375, 50, 80);

checkpoint.fillStyle(0xff69b4);
checkpoint.fillRect(checkpointX - 30, 370, 60, 12);

// Checkpoint label
this.add
  .text(checkpointX, 350, "MEMORY 01", {
    fontFamily: "monospace",
    fontSize: "14px",
    color: "#ffcae8",
    backgroundColor: "#171329",
    padding: { x: 5, y: 3 },
  })
  .setOrigin(0.5)
  .setDepth(6);


// Prompt that appears when you approach the checkpoint
const prompt = this.add
  .text(checkpointX, 320, "PRESS E TO EXPLORE", {
    fontFamily: "monospace",
    fontSize: "15px",
    color: "#ffb6dc",
    backgroundColor: "#171329",
    padding: { x: 8, y: 5 },
  })
  .setOrigin(0.5)
  .setDepth(20)
  .setVisible(false);

// Create the popup, but keep it hidden initially
const overlay = this.add.rectangle(
  400, 300, 800, 600, 0x000000, 0.75
);

const panel = this.add.rectangle(
  400, 300, 600, 320, 0x171329
);
panel.setStrokeStyle(4, 0xff69b4);

const heading = this.add.text(
  400, 185, "MEMORY 01: RICHMOND, VERMONT", {
    fontFamily: "monospace",
    fontSize: "22px",
    color: "#ff91c8",
    align: "center",
  }
).setOrigin(0.5);

const description = this.add.text(
  400, 285,
  "Growing up in a small Vermont town shaped\n" +
  "my early understanding of community and\n" +
  "the world around me.\n\n" +
  "My journey starts here.",
  {
    fontFamily: "monospace",
    fontSize: "17px",
    color: "#ffffff",
    align: "center",
    lineSpacing: 8,
  }
).setOrigin(0.5);

const closeText = this.add.text(
  400, 420, "[ PRESS E TO CLOSE ]", {
    fontFamily: "monospace",
    fontSize: "15px",
    color: "#b6ff5c",
  }
).setOrigin(0.5);

this.memoryPanel = this.add.container(0, 0, [
  overlay,
  panel,
  heading,
  description,
  closeText,
]);

this.memoryPanel.setDepth(100);
this.memoryPanel.setVisible(false);



this.input.keyboard!.on("keydown-E", () => {
  if (this.memoryOpen) {
    this.memoryOpen = false;
    this.memoryPanel?.setVisible(false);
    return;
  }

  if (Math.abs(this.player.x - checkpointX) < 75) {
    this.memoryOpen = true;
    this.memoryPanel?.setVisible(true);
  }
});

// Update prompt visibility as the player moves
this.events.on("update", () => {
  const nearby = Math.abs(this.player.x - checkpointX) < 75;

  prompt.setVisible(nearby && !this.memoryOpen);
});


          // Keyboard controls
          this.cursors =
            this.input.keyboard!.createCursorKeys();

          this.wasd =
            this.input.keyboard!.addKeys(
              "A,D"
            ) as typeof this.wasd;

          this.add
            .text(
              400,
              540,
              "MOVE: LEFT / RIGHT ARROWS OR A / D",
              {
                fontFamily: "monospace",
                fontSize: "14px",
                color: "#ffffff",
              }
            )
            .setOrigin(0.5);
        }

        update(_time: number, delta: number) {
  if (this.memoryOpen) return;

  const speed = 260 * (delta / 1000);

          if (
            this.cursors.left.isDown ||
            this.wasd.A.isDown
          ) {
            this.player.x -= speed;
          }

          if (
            this.cursors.right.isDown ||
            this.wasd.D.isDown
          ) {
            this.player.x += speed;
          }

          // Keep player inside screen
          this.player.x = Phaser.Math.Clamp(
            this.player.x,
            13,
            787
          );
        }
      }

      game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: gameRef.current,
        backgroundColor: "#080808",
        render: {
          pixelArt: true,
          antialias: false,
        },
        scene: ArcadeScene,
      });
    }

    startGame();

    return () => {
      cancelled = true;
      game?.destroy(true);
    };
  }, []);

  return (
    <div
      ref={gameRef}
      style={{
        width: "800px",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    />
  );
}
