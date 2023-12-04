export const editProfile = (formData: any) => async (dispatch: any) => {
  dispatch({
    type: 'EDIT_PROFILE',
    payload: formData,
  })
}
