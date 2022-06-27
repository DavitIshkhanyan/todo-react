export const Footer = ({ setStatus }) => {
    return (
        <div
            onClick={(e) => {
                if (e.target.tagName === 'INPUT') {
                    setStatus(e.target.value);
                }
            }}
            name="statusForm"
            action="#"
        >
            <label htmlFor="allCheckBox">All</label>
            <input
                id="allCheckBox"
                type="radio"
                name="status"
                value="All"
                hidden
            />
            <label htmlFor="activeCheckBox">Active</label>
            <input
                id="activeCheckBox"
                type="radio"
                name="status"
                value="Active"
                hidden
            />
            <label htmlFor="completedCheckBox">Completed</label>
            <input
                id="completedCheckBox"
                type="radio"
                name="status"
                value="Completed"
                hidden
            />
        </div>
    );
};
