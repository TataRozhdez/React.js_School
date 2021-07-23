import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, Form, ButtonGroup } from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'

import { getFilters } from '../../bus/products/filters/selectors'
import { onUpload } from '../../bus/uploadModal/selectors'
import { fetchOrigins } from '../../bus/products/filters/thunks'
import { validationSchema } from './schema'

import { FormGroup } from '../FormGroup/FormGroup'
import LogoImg from '../../assets/logo.png'

export const UploadModal = ({ show, onHide, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })
  const dispatch = useDispatch()
  const { data } = useSelector(onUpload)
  const { allOrigins } = useSelector(getFilters)

  const submitWithReset = (form) => {
    data ? onSubmit(form, data.id) : onSubmit(form)
  }

  const setDataField = () => {
    const originSelect = allOrigins.find((a) => a.value === data.origin)

    setValue('origin', originSelect)
    setValue('name', data.name)
    setValue('price', data.price)
  }

  useEffect(() => {
    reset()
  }, [show])

  useEffect(() => {
    if (!allOrigins.length) dispatch(fetchOrigins())
    if (data) setTimeout(() => setDataField())
  }, [data])

  return (
    <Modal
      show={show}
      onHide={onHide}
      keyboard={false}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 text-center flex-column">
        <img src={LogoImg} alt="Shopland" />
        <Modal.Title className="w-100">Add your product to store</Modal.Title>
      </Modal.Header>

      <form onSubmit={handleSubmit(submitWithReset)}>
        <Modal.Body>
          <FormGroup
            label="Name"
            error={errors.name ? errors.name.message : null}
          >
            <Form.Control
              type="text"
              placeholder="Name"
              {...register('name')}
            />
          </FormGroup>

          <FormGroup
            label="Price"
            error={errors.price ? errors.price.message : null}
          >
            <Form.Control
              type="number"
              placeholder="0"
              min="0"
              {...register('price')}
            />
          </FormGroup>

          <FormGroup
            label="Origin"
            error={errors.origin ? errors.origin.message : null}
          >
            <Controller
              name="origin"
              control={control}
              render={({ field }) => <Select {...field} options={allOrigins} />}
            />
          </FormGroup>
        </Modal.Body>
        {data ? (
          <Modal.Footer className="justify-content-around border-0 px-1">
            <ButtonGroup>
              <Button variant="outline-dark" onClick={onHide}>
                Close editing
              </Button>
              <Button
                variant="outline-secondary px-4"
                disabled={!isDirty}
                onClick={() => setDataField()}
              >
                Reset data
              </Button>
            </ButtonGroup>

            <Button variant="outline-danger" type="submit" disabled={!isDirty}>
              Confirm changes
            </Button>
          </Modal.Footer>
        ) : (
          <Modal.Footer className="justify-content-around border-0">
            <Button variant="outline-dark w-25" onClick={onHide}>
              Close
            </Button>
            <Button
              variant="outline-danger w-25"
              type="submit"
              disabled={!isDirty}
            >
              Upload
            </Button>
          </Modal.Footer>
        )}
      </form>
    </Modal>
  )
}

UploadModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
