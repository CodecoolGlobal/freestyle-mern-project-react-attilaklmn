const Filter = props => {


    return (
        <div className="filters">
            <form onSubmit={props.onFilter}>

                <label>Mana</label>
                <select type="text" name="manaCost">
                    <option value="">All</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="20">20</option>
                </select>
                <label>Attack</label>
                <select type="text" name="attack">
                    <option value="">All</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="20">20</option>
                </select>
                <label>Health</label>
                <select type="text" name="health">
                    <option value="">All</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <label>Card type</label>
                <select type="text" name="type">
                    <option value="">All</option>
                    <option value="3">Alternate Heroes</option>
                    <option value="4">Minions</option>
                    <option value="5">Spells</option>
                    <option value="7">Weapons</option>
                </select>
                <label>Rarity</label>
                <select type="text" name="rarity">
                    <option value="">All</option>
                    <option value="2">Base cards</option>
                    <option value="1">Common</option>
                    <option value="3">Rare</option>
                    <option value="4">Epic</option>
                    <option value="5">Legendary</option>
                </select>
                <label>Class</label>
                <select type="text" name="cardClass">
                    <option value="">All</option>
                    <option value="12">Neutral</option>
                    <option value="1">Death Knight</option>
                    <option value="14">Demon Hunter</option>
                    <option value="2">Druid</option>
                    <option value="3">Hunter</option>
                    <option value="4">Mage</option>
                    <option value="5">Paladin</option>
                    <option value="6">Priest</option>
                    <option value="7">Rogue</option>
                    <option value="8">Shaman</option>
                    <option value="9">Warlock</option>
                    <option value="10">Warrior</option>
                </select>
                <label>Expansion</label>
                <select type="text" name="cardSetId">
                    <option value="">All</option>
                    <option value="3">Legacy?</option>
                    <option value="4">Legacy?</option>
                    <option value="12">Adventure: Curse of Naxxramas</option>
                    <option value="13">Goblins vs Gnomes</option>
                    <option value="14">Adventure: Blackrock Mountain</option>
                    <option value="15">The Grand Tournament</option>
                    <option value="17">SPECIAL HERO SUBSTITUTES</option>
                    <option value="20">Adventure: The League of Explorers</option>
                    <option value="21">Whispers of the Old Gods</option>
                    <option value="23">Adventure: One Night in Karazhan</option>
                    <option value="25">Mean Streets of Gadgetzan</option>
                    <option value="27">Journey to Un'goro</option>
                    <option value="1001">Knights of the Frozen Throne</option>
                    <option value="1004">Kobolds & Catacombs</option>
                    <option value="1125">The Witchwood</option>
                    <option value="1127">The Boomsday Project</option>
                    <option value="1129">Rastakhan's Rumble</option>
                    <option value="1130">Rise of Shadows</option>
                    <option value="1158">Saviors of Uldum</option>
                    <option value="1347">Descent of Dragons</option>
                    <option value="1403">Adventure: Galakrond's Awakening</option>
                    <option value="1414">Ashes of Outland</option>
                    <option value="1443">Scholomance Academy</option>
                    <option value="1463">Demon Hunter Initiate</option>
                    <option value="1466">Madness at the Darkmoon Faire</option>
                    <option value="1525">Forged in the Barrens</option>
                    <option value="1578">United in Stormwind</option>
                    <option value="1626">Fractured in the Alterac Valley</option>
                    <option value="1635">legacy?</option>
                    <option value="1637">Standard core cards</option>
                    <option value="1646">Classic</option>
                    <option value="1658">Voyage to the Sunken City</option>
                    <option value="1691">Murder at Castle Nathria</option>
                    <option value="1776">March of the Lich King</option>
                    <option value="1809">Festival of Legends</option>
                    <option value="1869">March of the Lich King: Path of Arthas</option>
                </select>
                <button type="submit">Filter</button>
            </form>
        </div >
    )
}

export default Filter;