<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg non-padding navbar-color text-white">
            <div class="container">
                <div class="navbar-nav mr-auto">
                    <a class="navbar-brand RogFont text-font text-white" href="#">Master Duel<br> Ruler</a>
                </div>
                <div class="navbar-nav ml-auto">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav navbar-list d-flex justify-content-center">
                        <a class="nav-link text-white align-self-center ml-2" href="/tier-list">Tier List <span class="sr-only">(current)</span></a>
                        <a class="nav-link text-white align-self-center ml-2" href="/play-style-deck">Play Style Deck</a>
                        <a class="nav-link text-white align-self-center ml-2" href="/counter-style-deck">Counter Style Deck</a>
                        <a class="nav-link text-white" href="#">
                            <button type="button" class="btn btn-light">Login</button>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {

    };
    
</script>
<style>
    .text-font{
        text-align: center;
    }
    .non-padding{
        padding: 0px !important;
    }
    .navbar-color{
        background-color: #03182C !important;
        color: white !important;
    }
    .navbar-list a{
        font-size: 18px;
        font-weight: 600;
        
    }
</style>