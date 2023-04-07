const styles = {
  navbarContainer: {
    zIndex: '2',
    width: '100%',
    position: 'fixed',
    marginTop: '-100px',
    height: '100px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navbarParts: {
  },
  alignItemsCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  flexDirectionRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '15px',
    position: 'absolute',
    top: '100px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
  },
  services: {
    fontSize: '16px',
    marginTop: '10px',
    display: 'flex',
  },
  subServices: {
    display: 'flex',
    flexDirection: 'column',
  },
  subService: {
    cursor: 'pointer',
    color: '#F58220',
    marginTop: '5px',
    marginBottom: '5px',
  },
};

export default styles;
