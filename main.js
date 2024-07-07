
    const movableDiv = document.getElementById('movableDiv');
    let leftPosition = 10;
    let topPosition = 10;
    let currentTrailColor = 'lightblue'; // Initial trail color

    document.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(event) {
        switch (event.key) {
            case 'd':
                moveDiv(10, 0);
                break;
            case 'q':
                moveDiv(-10, 0);
                break;
            case 's':
                moveDiv(0, 10);
                break;
            case 'z':
                moveDiv(0, -10);
                break;
            case 'r':
                currentTrailColor = 'red';
                break;
            case 'g':
                currentTrailColor = 'green';
                break;
            case 'b':
                currentTrailColor = 'blue';
                break;
            case 'y':
                currentTrailColor = 'yellow';
                break;
            case 'p':
                currentTrailColor = 'pink';
                break;
            case 'c':
                currentTrailColor = 'black';
                break;
            default:
                return;
        }
    }

    function moveDiv(dx, dy) {
        createTrail(leftPosition, topPosition);
        leftPosition += dx;
        topPosition += dy;
        movableDiv.style.left = leftPosition + 'px';
        movableDiv.style.top = topPosition + 'px';
    }

    function createTrail(left, top) {
        const trailDiv = document.createElement('div');
        trailDiv.className = 'trail';
        trailDiv.style.left = left + 'px';
        trailDiv.style.top = top + 'px';
        trailDiv.style.backgroundColor = currentTrailColor;
        document.body.appendChild(trailDiv);
    }
