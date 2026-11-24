"""Retire les pages blanches de tête et de queue produites par la pagination PDF.

Chrome ajoute une page vide avant et après une pile de pages au format exact : on
les supprime ici, puis on vérifie que chaque page restante porte bien du texte.

    uv run --with pymupdf python scripts/pdf/trim.py exports/
"""

from __future__ import annotations

import sys
from pathlib import Path

import pymupdf

TARGETS = {
    "Hafida-El-Mouden-Presentation-Lemay.pdf": 17,
    "Hafida-El-Mouden-Discours-Lemay.pdf": None,
}


def trim(path: Path) -> None:
    document = pymupdf.open(path)
    empty = [index for index in range(document.page_count) if not document[index].get_text().strip()]
    # Seules les extrémités sont retirées : une page vide au milieu serait un bug.
    edges = [index for index in empty if index in {0, document.page_count - 1}]
    for index in sorted(edges, reverse=True):
        document.delete_page(index)
        print(f"  - page {index + 1} vide retirée")

    expected = TARGETS.get(path.name)
    if expected is not None and document.page_count != expected:
        raise SystemExit(f"{path.name}: {document.page_count} pages au lieu de {expected}")

    remaining_empty = [
        index for index in range(document.page_count) if not document[index].get_text().strip()
    ]
    if remaining_empty:
        raise SystemExit(f"{path.name}: pages vides internes {remaining_empty}")

    document.saveIncr()
    print(f"  ok {path.name} — {document.page_count} pages, "
          f"{round(document[0].rect.width)}x{round(document[0].rect.height)} pt")
    document.close()


def main() -> int:
    folder = Path(sys.argv[1] if len(sys.argv) > 1 else "exports")
    for name in TARGETS:
        path = folder / name
        if not path.exists():
            print(f"  ! {name} absent")
            continue
        print(name)
        trim(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
