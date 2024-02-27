import SvgButton from "../buttons/SvgButton";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    const showMedicines = () => {
        navigate("/", { replace: true })
    }

    const showCosmetics = () => {
        navigate("/cosmetics", { replace: true })
    }
    const showSupplements = () => {
        navigate("/supplements", { replace: true })
    }
    const showMedicalAids = () => {
        navigate("/aids", { replace: true })
    }
    const showSanitaryMaterials = () => {
        navigate("/sanitaryMaterials", { replace: true })
    }
    const showMedicalDiagnosticsDevices = () => {
        navigate("/devices", { replace: true })
    }

    const addNew = () => {
        navigate("/add", { replace: true })
    }

    return (
        <div className="sidenav">
            <SvgButton handleClick={showMedicines} name={"Lijekovi"} icon={"medicine"}></SvgButton>
            <SvgButton handleClick={showCosmetics} name={"Kozmetika"} icon={"cosmetics"}></SvgButton>
            <SvgButton handleClick={showSupplements} name={"Dijetetski suplementi"} icon={"supplements"}></SvgButton>
            <SvgButton handleClick={showSanitaryMaterials} name={"Sanitetski materijal"} icon={"sanitary material"}></SvgButton>
            <SvgButton handleClick={showMedicalDiagnosticsDevices} name={"Dijagnostika"} icon={"medical devices"}></SvgButton>
            <SvgButton handleClick={showMedicalAids} name={"Medicinska pomagala"} icon={"medical aids"}></SvgButton>
            <SvgButton handleClick={addNew} name={"Dodaj novi"} icon={"add"}></SvgButton>
        </div>
    );
}

export default NavBar;