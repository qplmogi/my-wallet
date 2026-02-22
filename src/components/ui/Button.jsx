function Button({ children, variant = 'primary', onClick }) {
    const styles = {
        primary: {
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s'
        },

    };

    return (
        <button style={styles[variant] || styles.primary} onClick={onClick}>
            {children}
        </button>
    );
}
export default Button;