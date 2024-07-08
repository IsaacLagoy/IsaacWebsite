<script>
    export let name;
    export let id;
    export let cost;
</script>

<div>
    <div class='container-row'>
        <a href='/dndDatabase/dndShop/{id}' class='contained-column no-decoration black'>
            <div>
                <p>{name}</p>
            </div>
        </a>
        <div>
            <p class='contained-column'>Cost: ${cost}</p>
        </div>
    </div>
    <div class='background-dark_wood spacer-one'></div>
</div>