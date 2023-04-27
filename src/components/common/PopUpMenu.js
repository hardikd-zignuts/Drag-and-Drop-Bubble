import React from 'react'
import { ButtonToolbar, OverlayTrigger, Popover } from 'react-bootstrap';

const PopUpMenu = ({ element }) => {
    const popoverHoverFocus = (
        <Popover id="popover-trigger-hover-focus" title="Popover bottom">
            Hello Hardik
        </Popover>
    );
    return (
        <ButtonToolbar>
            <OverlayTrigger
                trigger={['hover', 'focus']}
                placement="bottom"
                overlay={popoverHoverFocus}
            >
                {element}
            </OverlayTrigger>
        </ButtonToolbar>

    )
}

export default PopUpMenu