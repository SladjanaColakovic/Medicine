import SvgButton from "../buttons/SvgButton";

const NavBar = () => {

    const showMedicines = () => {

    }

    const showCosmetics = () => { }
    const showSupplements = () => { }
    const showMedicalAids = () => {}
    const showSanitaryMaterials = () => {}
    const showMedicalDiagnosticsDevices = () => {}

    return (
        <div className="sidenav">
            <SvgButton handleClick={showMedicines} name={"Lijekovi"} icon={"medicine"}></SvgButton>
            <SvgButton handleClick={showCosmetics} name={"Kozmetika"} icon={"cosmetics"}></SvgButton>
            <SvgButton handleClick={showSupplements} name={"Dijetetski suplementi"} icon={"supplements"}></SvgButton>
            <SvgButton handleClick={showSanitaryMaterials} name={"Sanitetski materijal"} icon={"sanitary material"}></SvgButton>
            <SvgButton handleClick={showMedicalDiagnosticsDevices} name={"Dijagnostika"} icon={"medical devices"}></SvgButton>
            <SvgButton handleClick={showMedicalAids} name={"Medicinska pomagala"} icon={"medical aids"}></SvgButton>
        </div>
    );
}

export default NavBar;