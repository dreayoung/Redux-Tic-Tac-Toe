import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';

const RestartButton = () => {
    const dispatch = useDispatch();

    return (
      <Button onClick={() =>
          dispatch({
            type: 'RESTART_GAME'
          })
        }>
            RESTART
      </Button>
    )
  }

  export default RestartButton
