// SVG Art and Mockup Generators matching the original visual specification exactly

const R = (x: number, y: number, w: number, h: number, c: string, r?: number) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r ?? 3}" class="${c}"/>`;

const C = (x: number, y: number, r: number, c: string) =>
  `<circle cx="${x}" cy="${y}" r="${r}" class="${c}"/>`;

export function generateWavesSvg(w: number, h: number, n: number, seed: number, sw: number): string {
  let s = '';
  for (let i = 0; i < n; i++) {
    const y0 = (h * (i + 0.5)) / n;
    const a = (h / n) * (1.4 + Math.sin(seed + i * 0.7));
    const f = 0.006 + 0.002 * Math.cos(seed * 2 + i);
    const p = seed + i * 0.35;
    let d = `M0 ${y0}`;
    for (let x = 0; x <= w; x += 20) {
      d += `L${x} ${(y0 + a * Math.sin(x * f + p) + a * 0.5 * Math.sin(x * f * 2.3 + p * 1.7)).toFixed(1)}`;
    }
    s += `<path d="${d}"/>`;
  }
  return `<svg class="wv" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" fill="none" stroke="currentColor" stroke-width="${sw}">${s}</svg>`;
}

const FRAME =
  R(0, 0, 400, 250, 'b', 12) +
  R(0, 0, 400, 24, 'l', 12) +
  C(14, 12, 3.5, 'm') +
  C(26, 12, 3.5, 'm') +
  C(38, 12, 3.5, 'm') +
  R(120, 7, 160, 10, 'p', 5);

export const PROJECT_MOCKUPS: Record<string, () => string> = {
  talent: () => {
    let o = FRAME + R(14, 36, 170, 26, 'p', 6) + R(22, 45, 60, 8, 'm', 4);
    for (let i = 0; i < 4; i++) {
      const y = 72 + i * 38;
      o +=
        R(14, y, 170, 32, 'p', 8) +
        C(32, y + 16, 9, 'o') +
        R(48, y + 9, 70, 6, 'i', 3) +
        R(48, y + 19, 46, 5, 'm', 3) +
        R(140, y + 9, 36, 14, i === 2 ? 'l' : 'a', 7);
    }
    return (
      o +
      R(200, 36, 186, 92, 'p', 10) +
      '<circle cx="262" cy="82" r="30" fill="none" stroke-width="9" class="l" style="stroke:var(--line)"/>' +
      '<circle cx="262" cy="82" r="30" fill="none" stroke-width="9" stroke-dasharray="150 190" transform="rotate(-90 262 82)" style="stroke:var(--accent)"/>' +
      R(310, 56, 64, 7, 'i', 3) +
      R(310, 70, 48, 6, 'm', 3) +
      R(310, 84, 56, 6, 'm', 3) +
      R(200, 138, 186, 100, 'i', 10) +
      R(212, 150, 90, 6, 'a', 3) +
      R(212, 164, 130, 6, 'm', 3) +
      R(224, 178, 110, 6, 'm', 3) +
      R(224, 192, 76, 6, 'a', 3) +
      R(212, 206, 120, 6, 'm', 3)
    );
  },

  lean: () => {
    let o = FRAME + R(0, 24, 64, 226, 'p', 0);
    for (let i = 0; i < 5; i++) {
      o += R(12, 40 + i * 24, 40, 8, i === 1 ? 'a' : 'l', 4);
    }
    for (let i = 0; i < 3; i++) {
      o +=
        R(76 + i * 106, 38, 98, 50, 'p', 8) +
        R(86 + i * 106, 48, 40, 6, 'm', 3) +
        R(86 + i * 106, 62, 56, 14, i === 1 ? 'a' : 'i', 4);
    }
    o += R(76, 98, 200, 86, 'p', 8);
    const h = [30, 50, 38, 62, 46, 70, 54];
    for (let i = 0; i < 7; i++) {
      o += R(90 + i * 26, 174 - h[i], 16, h[i], i === 5 ? 'a' : 'o', 3);
    }
    o += R(286, 98, 100, 86, 'p', 8) + C(336, 141, 26, 'o') + C(336, 141, 14, 'p');
    for (let i = 0; i < 3; i++) {
      o +=
        R(76, 194 + i * 17, 310, 11, i % 2 ? 'p' : 'l', 3) +
        R(84, 197 + i * 17, 60, 5, 'm', 2) +
        R(300, 197 + i * 17, 40, 5, i === 0 ? 'a' : 'm', 2);
    }
    return o;
  },

  nodelala: () => {
    let o = FRAME + R(14, 34, 372, 22, 'p', 11) + R(26, 42, 70, 7, 'm', 3) + R(330, 37, 50, 16, 'a', 8);
    for (let i = 0; i < 3; i++) {
      const x = 14 + i * 126;
      o +=
        R(x, 68, 118, 170, 'p', 10) +
        R(x + 6, 74, 106, 86, i === 1 ? 'a' : 'o', 7) +
        `<path d="M${x + 6} 150 L${x + 40} 112 L${x + 68} 138 L${x + 88} 120 L${x + 112} 150Z" class="b" opacity=".35"/>` +
        R(x + 8, 170, 70, 7, 'i', 3) +
        R(x + 8, 184, 48, 6, 'm', 3) +
        R(x + 8, 204, 40, 10, 'a', 4) +
        R(x + 60, 204, 44, 10, 'l', 4);
    }
    return o;
  },

  yenext: () => {
    let o = FRAME + R(0, 24, 92, 226, 'p', 0) + R(10, 36, 52, 8, 'i', 4);
    for (let i = 0; i < 5; i++) {
      o += R(10, 56 + i * 20, i === 1 ? 70 : 56, 10, i === 1 ? 'a' : 'l', 5);
    }
    const b: [number, number, number, string][] = [
      [110, 38, 150, 'p'],
      [230, 66, 150, 'a'],
      [110, 98, 190, 'p'],
      [200, 130, 176, 'a'],
      [110, 162, 120, 'p'],
    ];
    b.forEach(([bx, by, bw, bc]) => {
      o +=
        R(bx + (bc === 'a' ? 20 : 0), by, bw, 24, bc, 12) +
        R(bx + (bc === 'a' ? 32 : 12), by + 9, bw - 44, 6, bc === 'a' ? 'b' : 'm', 3);
    });
    return o + C(122, 224, 8, 'o') + R(138, 214, 236, 20, 'p', 10) + R(146, 222, 70, 5, 'm', 3);
  },

  site: () => {
    let o =
      FRAME +
      R(0, 24, 400, 28, 'p', 0) +
      R(14, 34, 50, 8, 'i', 4) +
      R(300, 32, 26, 10, 'l', 5) +
      R(334, 32, 50, 10, 'a', 5) +
      R(30, 76, 220, 18, 'i', 5) +
      R(30, 102, 150, 18, 'i', 5) +
      R(30, 132, 170, 6, 'm', 3) +
      R(30, 144, 140, 6, 'm', 3) +
      R(30, 164, 70, 20, 'a', 10) +
      R(270, 70, 108, 90, 'o', 14) +
      C(324, 115, 24, 'a');
    for (let i = 0; i < 3; i++) {
      o +=
        R(30 + i * 122, 198, 110, 44, 'p', 8) +
        R(40 + i * 122, 208, 60, 6, 'i', 3) +
        R(40 + i * 122, 222, 80, 5, 'm', 3);
    }
    return o;
  },
};

export const EXPERIENCE_ART: Record<string, () => string> = {
  net: () => {
    const n = [
      [40, 120],
      [100, 50],
      [110, 160],
      [180, 90],
      [250, 40],
      [250, 150],
      [320, 100],
      [180, 185],
    ];
    const e = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
      [3, 5],
      [4, 6],
      [5, 6],
      [2, 7],
      [5, 7],
    ];
    let o = '';
    e.forEach((q) => {
      o += `<line x1="${n[q[0]][0]}" y1="${n[q[0]][1]}" x2="${n[q[1]][0]}" y2="${n[q[1]][1]}" style="stroke:var(--accent)" stroke-width="2" opacity=".5"/>`;
    });
    n.forEach((q, i) => {
      o += C(q[0], q[1], i === 3 ? 13 : 8, i === 3 ? 'a' : 'i');
    });
    return `<svg class="fg" viewBox="0 0 360 220">${o}</svg>`;
  },

  grid: () => {
    let o = '';
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 6; c++) {
        o +=
          R(10 + c * 56, 10 + r * 50, 48, 42, (r * 6 + c) % 5 === 2 ? 'a' : 'p', 9) +
          R(18 + c * 56, 20 + r * 50, 26, 5, 'l', 2);
      }
    }
    return `<svg class="fg" viewBox="0 0 350 210">${o}</svg>`;
  },

  chat: () => {
    return (
      '<svg class="fg" viewBox="0 0 340 220">' +
      R(10, 10, 170, 44, 'p', 16) +
      R(24, 26, 100, 6, 'm', 3) +
      R(160, 66, 170, 44, 'a', 16) +
      R(176, 82, 110, 6, 'b', 3) +
      R(10, 122, 200, 44, 'p', 16) +
      R(24, 138, 130, 6, 'm', 3) +
      R(190, 178, 140, 34, 'a', 14) +
      R(204, 192, 80, 6, 'b', 3) +
      '</svg>'
    );
  },
};
