import {createThirdwebClient} from "thirdweb";

const clientId = import.meta.env.CLIENT_ID

export const client = createThirdwebClient({
    clientId: clientId
})