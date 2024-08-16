<script>
    export let name;
    export let id;
    export let cost;
</script>

<div style='padding:5vw;'>
    <div class='container-row'>
        <a href='/dndDatabase/dndShop/{id}' class='contained-column no-decoration black'>
            <div class='item-box'>
                <p>{name}</p>
            </div>
        </a>
        <div class='money-bag'>
            <p>${cost}</p>
        </div>
    </div>
    <div class='background-light_wood spacer-one'></div>
    <div class='container-row'>
        <div class='background-light_wood spacer-one contained-column'>-</div>
        <div></div>
        <div></div>
        <div class='background-light_wood spacer-one contained-column'>-</div>
    </div>
</div>