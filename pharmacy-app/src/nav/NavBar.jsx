import SvgButton from "../buttons/SvgButton";

const NavBar = () => {

    const showMedicines = () => {

    }

    const showCosmetics = () => { }
    const showSupplements = () => { }

    return (
        <div className="sidenav">
            <SvgButton handleClick={showMedicines} name={"Lijekovi"} icon={"medicine"}></SvgButton>
            <SvgButton handleClick={showCosmetics} name={"Kozmetika"} icon={"cosmetics"}></SvgButton>
            <SvgButton handleClick={showSupplements} name={"Suplementi"} icon={"supplements"}></SvgButton>
        </div>
    );
}

export default NavBar;