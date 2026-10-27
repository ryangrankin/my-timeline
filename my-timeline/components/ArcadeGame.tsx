
"use client";

import { useEffect, useRef } from "react";
import { drawRichmondBackground } from "./RichmondBackground";
import { timelineEvents, type TimelineEvent } from "../data/timeline";

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

        private wasd!: {
          A: Phaser.Input.Keyboard.Key;
          D: Phaser.Input.Keyboard.Key;
        };

        private interactKey!: Phaser.Input.Keyboard.Key;
        private memoryOpen = false;

        private memoryPanel!: Phaser.GameObjects.Container;
        private prompt!: Phaser.GameObjects.Text;

        private memoryHeading!: Phaser.GameObjects.Text;
        private memoryYear!: Phaser.GameObjects.Text;
        private memoryDescription!: Phaser.GameObjects.Text;
        private memoryReflection!: Phaser.GameObjects.Text;

        private checkpoints = [
  { x: 300, eventId: "1", label: "MEMORY 01" },
  { x: 520, eventId: "3", label: "MEMORY 02" },
  { x: 700, eventId: "6", label: "MEMORY 03" },
  { x: 950, eventId: "10", label: "MEMORY 04" },
  { x: 1150, eventId: "19", label: "MEMORY 05" },
  { x: 1450, eventId: "24", label: "MEMORY 06" },
];

        constructor() {
          super("ArcadeScene");
        }

        create() {
          this.memoryOpen = false;

          // ==================================
          // RICHMOND BACKGROUND
          // ==================================

          this.cameras.main.setBackgroundColor("#87b8d8");

// Extend the sky across the entire level
this.add
  .rectangle(800, 230, 1600, 460, 0x87b8d8)
  .setDepth(-10);

// Keep the original Richmond scenery
drawRichmondBackground(this);
          // ==================================
          // ARCADE HEADER
          // ==================================

          this.add
            .text(400, 45, "LIFE IN PROGRESS", {
              fontFamily: "monospace",
              fontSize: "32px",
              color: "#b6ff5c",
              backgroundColor: "#171329",
              padding: { x: 12, y: 6 },
            })
            .setOrigin(0.5)
            .setScrollFactor(0)
            .setDepth(20);
            

          this.add
            .text(400, 95, "PLAYER ONE - VERMONT 2005", {
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#ffffff",
              backgroundColor: "#171329",
              padding: { x: 8, y: 4 },
            })
            .setOrigin(0.5)
            .setScrollFactor(0)
            .setDepth(20);

          // Ground
          // Ground extends across the full 1600-pixel level
            this.add
                .rectangle(800, 460, 1600, 8, 0xb6ff5c)
                .setDepth(4);


// ==================================
// EXTENDED VERMONT SCENERY
// ==================================

const scenery = this.add.graphics();
scenery.setDepth(2);

// Distant green mountains
scenery.fillStyle(0x395c50);
scenery.fillTriangle(780, 455, 1050, 180, 1320, 455);
scenery.fillTriangle(1100, 455, 1380, 230, 1600, 455);

// Autumn trees
const drawTree = (x: number, y: number, color: number) => {
  scenery.fillStyle(0x67452e);
  scenery.fillRect(x - 7, y - 65, 14, 65);

  scenery.fillStyle(color);
  scenery.fillRect(x - 28, y - 110, 56, 48);
  scenery.fillRect(x - 40, y - 92, 80, 30);
  scenery.fillRect(x - 20, y - 130, 40, 25);
};

drawTree(920, 455, 0xe58a39);
drawTree(1130, 455, 0xd94f36);
drawTree(1370, 455, 0xf0b443);
drawTree(1530, 455, 0xb94b49);
          // ==================================
          // PIXEL ART PLAYER
          // ==================================

          const pixel = 4;

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
            Y: 0xffd447,
            S: 0xf2bd91,
            K: 0x241c20,
            M: 0xd66b84,
            P: 0xff69b4,
            W: 0xffc0dc,
            D: 0x6555aa,
          };

          const spriteWidth = Math.max(
            ...sprite.map((row) => row.length)
          );

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

          if (!this.textures.exists("player")) {
            graphics.generateTexture(
              "player",
              spriteWidth * pixel,
              sprite.length * pixel
            );
          }

          graphics.destroy();

          this.player = this.add.sprite(100, 425, "player");
          this.player.setDepth(10);

          // Make the level wider than the screen
this.cameras.main.setBounds(0, 0, 1600, 600);

// Camera follows the player horizontally
this.cameras.main.startFollow(this.player, true, 0.08, 0);

// Keep the player near the center of the screen
this.cameras.main.setFollowOffset(0, 0);

          // ==================================
          // MEMORY CHECKPOINTS
          // ==================================

          this.checkpoints.forEach((checkpoint, index) => {
            const x = checkpoint.x;

            const marker = this.add.graphics();
            marker.setDepth(5);

            // Purple checkpoint body
            marker.fillStyle(0x704e94);
            marker.fillRect(x - 25, 375, 50, 80);

            // Pink top
            marker.fillStyle(0xff69b4);
            marker.fillRect(x - 30, 370, 60, 12);

            // Pixel heart
            marker.fillStyle(0xffc0dc);
            marker.fillRect(x - 12, 395, 10, 10);
            marker.fillRect(x + 2, 395, 10, 10);
            marker.fillRect(x - 8, 405, 16, 10);
            marker.fillRect(x - 4, 415, 8, 6);

            this.add
              .text(x, 345, checkpoint.label, {
                fontFamily: "monospace",
                fontSize: "15px",
                color: "#ffcae8",
                backgroundColor: "#171329",
                padding: { x: 6, y: 4 },
              })
              .setOrigin(0.5)
              .setDepth(15);
          });

          // ==================================
          // INTERACTION PROMPT
          // ==================================

          this.prompt = this.add
            .text(520, 315, "PRESS E TO EXPLORE", {
              fontFamily: "monospace",
              fontSize: "15px",
              color: "#ffffff",
              backgroundColor: "#a83378",
              padding: { x: 10, y: 6 },
            })
            .setOrigin(0.5)
            .setDepth(30)
            .setVisible(false);

          // ==================================
          // MEMORY POPUP
          // ==================================

          const overlay = this.add.rectangle(
            400,
            300,
            800,
            600,
            0x000000,
            0.8
          );

          const panel = this.add.rectangle(
            400,
            300,
            650,
            390,
            0x171329
          );

          panel.setStrokeStyle(5, 0xff69b4);

          this.memoryHeading = this.add
            .text(400, 155, "", {
              fontFamily: "monospace",
              fontSize: "22px",
              color: "#ff91c8",
              align: "center",
              wordWrap: { width: 570 },
            })
            .setOrigin(0.5);

          this.memoryYear = this.add
            .text(400, 200, "", {
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#b6ff5c",
            })
            .setOrigin(0.5);

          this.memoryDescription = this.add
            .text(400, 260, "", {
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#ffffff",
              align: "center",
              wordWrap: { width: 550 },
              lineSpacing: 7,
            })
            .setOrigin(0.5);

          this.memoryReflection = this.add
            .text(400, 350, "", {
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#ffcae8",
              align: "center",
              wordWrap: { width: 550 },
              lineSpacing: 5,
            })
            .setOrigin(0.5);

          const closeText = this.add
            .text(400, 455, "[ PRESS E TO CLOSE ]", {
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#b6ff5c",
            })
            .setOrigin(0.5);

          this.memoryPanel = this.add.container(0, 0, [
            overlay,
            panel,
            this.memoryHeading,
            this.memoryYear,
            this.memoryDescription,
            this.memoryReflection,
            closeText,
          ]);

          this.memoryPanel.setDepth(100);
          this.memoryPanel.setScrollFactor(0);
          this.memoryPanel.setVisible(false);

          // ==================================
          // KEYBOARD CONTROLS
          // ==================================

          this.cursors =
            this.input.keyboard!.createCursorKeys();

          this.wasd = {
            A: this.input.keyboard!.addKey("A"),
            D: this.input.keyboard!.addKey("D"),
          };

          this.interactKey =
            this.input.keyboard!.addKey("E");

          this.input.keyboard!.enabled = true;

          this.input.keyboard!.addCapture([
            Phaser.Input.Keyboard.KeyCodes.LEFT,
            Phaser.Input.Keyboard.KeyCodes.RIGHT,
            Phaser.Input.Keyboard.KeyCodes.E,
          ]);

          // ==================================
          // FOOTER
          // ==================================

          this.add
            .text(
              400,
              540,
              "MOVE: A / D OR ARROWS    |    INTERACT: E",
              {
                fontFamily: "monospace",
                fontSize: "14px",
                color: "#ffffff",
              }
            )
            .setOrigin(0.5);

          this.add
            .text(
              400,
              575,
              "LEVEL 01: RICHMOND, VERMONT",
              {
                fontFamily: "monospace",
                fontSize: "13px",
                color: "#ff91c8",
              }
            )
            .setScrollFactor(0)
            .setOrigin(0.5);
        }

        // ==================================
        // FIND NEAREST CHECKPOINT
        // ==================================

        private getNearbyCheckpoint() {
          const nearby = this.checkpoints
            .map((checkpoint) => ({
              ...checkpoint,
              distance: Math.abs(
                this.player.x - checkpoint.x
              ),
            }))
            .filter((checkpoint) => checkpoint.distance < 75)
            .sort((a, b) => a.distance - b.distance);

          return nearby[0] ?? null;
        }

        // ==================================
        // OPEN MEMORY
        // ==================================

        private showMemory(memory: TimelineEvent) {
          this.memoryHeading.setText(
            memory.title.toUpperCase()
          );

          this.memoryYear.setText(memory.year);

          this.memoryDescription.setText(
            memory.description
          );

          this.memoryReflection.setText(
            memory.reflection
              ? `✦ ${memory.reflection}`
              : ""
          );

          this.memoryOpen = true;
          this.memoryPanel.setVisible(true);
          this.prompt.setVisible(false);
        }

        // ==================================
        // GAME LOOP
        // ==================================

        update(_time: number, delta: number) {
          // Press E to interact
          if (
            Phaser.Input.Keyboard.JustDown(
              this.interactKey
            )
          ) {
            if (this.memoryOpen) {
              // Close popup
              this.memoryOpen = false;
              this.memoryPanel.setVisible(false);
            } else {
              const checkpoint =
                this.getNearbyCheckpoint();

              if (checkpoint) {
                const memory = timelineEvents.find(
                  (event) =>
                    event.id === checkpoint.eventId
                );

                if (memory) {
                  this.showMemory(memory);
                }
              }
            }
          }

          // Pause movement while popup is open
          if (this.memoryOpen) {
            this.prompt.setVisible(false);
            return;
          }

          // Player movement
          const speed = 260 * (delta / 1000);

          if (
            this.cursors.left.isDown ||
            this.wasd.A.isDown
          ) {
            this.player.x -= speed;
            this.player.setFlipX(true);
          }

          if (
            this.cursors.right.isDown ||
            this.wasd.D.isDown
          ) {
            this.player.x += speed;
            this.player.setFlipX(false);
          }

          // Keep player on screen
          this.player.x = Phaser.Math.Clamp(
            this.player.x,
            26,
            1574
          );

          // Show interaction prompt near a checkpoint
          const checkpoint =
            this.getNearbyCheckpoint();

          if (checkpoint) {
            this.prompt.setPosition(
              checkpoint.x,
              315
            );
            this.prompt.setVisible(true);
          } else {
            this.prompt.setVisible(false);
          }
        }
      }

      // ==================================
      // START PHASER
      // ==================================

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
