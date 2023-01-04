import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store"

export const useUiStore = () => {

    const dispatch = useDispatch()

    const { isDateModalOpen } = useSelector(state => state.ui)

    const OpenDateModal = () => {
        dispatch(onOpenDateModal())
    }

    const CloseDateModal = () => {
        dispatch(onCloseDateModal())
    }

    return {

        //* Propiedades
        isDateModalOpen,

        //* Métodos
        OpenDateModal,
        CloseDateModal

    }

}