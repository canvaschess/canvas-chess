Canvas Chess
============

A chess UI based on the HTML5 Canvas.

```javascript
<div id="board"></div>
<script>
    var board = new CHESS.Board({
        container: 'board',
        height: '400px',
        width: '400px',
        piece_set: 'img/pieces/merida'
    });
    board.setActive(true);
</script>
```
