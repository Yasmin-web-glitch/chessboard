const pieces = document.querySelectorAll(".pawn");
const boxes = document.querySelectorAll(".box");

let selectedPiece = null;

pieces.forEach(piece => {
    piece.addEventListener("dragstart", function () {
        selectedPiece = this;
    });
});

boxes.forEach(box => {
    box.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    box.addEventListener("drop", function (e) {
        e.preventDefault();

        if (selectedPiece) {
            this.innerHTML = "";
            this.appendChild(selectedPiece);
        }
    });
});