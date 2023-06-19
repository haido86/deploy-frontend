import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Product } from '../types/type'
import axios from 'axios'

type ProductState = {
  isLoading: boolean
  error: null | string
  items: Product[]
}

const initialState: ProductState = {
  isLoading: false,
  error: null,
  items: []
}

export const fetchProductsThunk = createAsyncThunk('products/fetch', async () => {
  try {
    const res = await axios.get('http://ec2-35-172-183-28.compute-1.amazonaws.com/api/v1/products')
    const products = await res.data
    return products
  } catch (error) {
    console.log(error)
    throw error
  }
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProductsThunk.rejected, (state) => {
      state.error = 'something went wrong'
      state.isLoading = false
    })
    builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.items = action.payload
    })
  }
})

export default productsSlice.reducer
