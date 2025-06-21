import FacebookIcon from '@mui/icons-material/Facebook';
export default function SocialsLinks({Icon}) {

    return(
        <>
            <div className="flex space-x-2 w-auto" >
                 {Icon && <Icon sx={{ fontSize: 20 }} className="text-xl text-blue-600" />}
                <h4>Facebook</h4>
            </div>
        </>
    )
}