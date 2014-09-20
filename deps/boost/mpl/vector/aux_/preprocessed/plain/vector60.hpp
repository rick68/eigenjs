
// Copyright Aleksey Gurtovoy 2000-2004
//
// Distributed under the Boost Software License, Version 1.0. 
// (See accompanying file LICENSE_1_0.txt or copy at 
// http://www.boost.org/LICENSE_1_0.txt)
//

// Preprocessed version of "boost/mpl/vector/vector60.hpp" header
// -- DO NOT modify by hand!

namespace boost { namespace mpl {

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50
    >
struct vector51
{
    typedef aux::vector_tag<51> tag;
    typedef vector51 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    

    typedef void_ item51;
    typedef T50 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,51 > end;
};

template<>
struct push_front_impl< aux::vector_tag<50> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector51<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<51> >
{
    template< typename Vector > struct apply
    {
        typedef vector50<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item50
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<50> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector51<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<51> >
{
    template< typename Vector > struct apply
    {
        typedef vector50<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            > type;
    };
};

template< typename V >
struct v_at< V,51 >
{
    typedef typename V::item51 type;
};

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50, typename T51
    >
struct vector52
{
    typedef aux::vector_tag<52> tag;
    typedef vector52 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    typedef T51 item51;
    

    typedef void_ item52;
    typedef T51 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,52 > end;
};

template<>
struct push_front_impl< aux::vector_tag<51> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector52<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<52> >
{
    template< typename Vector > struct apply
    {
        typedef vector51<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item50
            , typename Vector::item51
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<51> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector52<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<52> >
{
    template< typename Vector > struct apply
    {
        typedef vector51<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50
            > type;
    };
};

template< typename V >
struct v_at< V,52 >
{
    typedef typename V::item52 type;
};

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50, typename T51, typename T52
    >
struct vector53
{
    typedef aux::vector_tag<53> tag;
    typedef vector53 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    typedef T51 item51;
    typedef T52 item52;
    

    typedef void_ item53;
    typedef T52 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,53 > end;
};

template<>
struct push_front_impl< aux::vector_tag<52> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector53<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<53> >
{
    template< typename Vector > struct apply
    {
        typedef vector52<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item40
            , typename Vector::item51, typename Vector::item52
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<52> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector53<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item49
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<53> >
{
    template< typename Vector > struct apply
    {
        typedef vector52<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            > type;
    };
};

template< typename V >
struct v_at< V,53 >
{
    typedef typename V::item53 type;
};

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50, typename T51, typename T52, typename T53
    >
struct vector54
{
    typedef aux::vector_tag<54> tag;
    typedef vector54 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    typedef T51 item51;
    typedef T52 item52;
    typedef T53 item53;
    

    typedef void_ item54;
    typedef T53 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,54 > end;
};

template<>
struct push_front_impl< aux::vector_tag<53> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector54<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<54> >
{
    template< typename Vector > struct apply
    {
        typedef vector53<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item50
            , typename Vector::item51, typename Vector::item52
            , typename Vector::item53
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<53> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector54<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<54> >
{
    template< typename Vector > struct apply
    {
        typedef vector53<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52
            > type;
    };
};

template< typename V >
struct v_at< V,54 >
{
    typedef typename V::item54 type;
};

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50, typename T51, typename T52, typename T53, typename T54
    >
struct vector55
{
    typedef aux::vector_tag<55> tag;
    typedef vector55 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    typedef T51 item51;
    typedef T52 item52;
    typedef T53 item53;
    typedef T54 item54;
    

    typedef void_ item55;
    typedef T54 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,55 > end;
};

template<>
struct push_front_impl< aux::vector_tag<54> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector55<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<55> >
{
    template< typename Vector > struct apply
    {
        typedef vector54<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item50
            , typename Vector::item51, typename Vector::item52
            , typename Vector::item53, typename Vector::item54
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<54> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector55<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<55> >
{
    template< typename Vector > struct apply
    {
        typedef vector54<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            > type;
    };
};

template< typename V >
struct v_at< V,55 >
{
    typedef typename V::item55 type;
};

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50, typename T51, typename T52, typename T53, typename T54
    , typename T55
    >
struct vector56
{
    typedef aux::vector_tag<56> tag;
    typedef vector56 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    typedef T51 item51;
    typedef T52 item52;
    typedef T53 item53;
    typedef T54 item54;
    typedef T55 item55;
    

    typedef void_ item56;
    typedef T55 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,56 > end;
};

template<>
struct push_front_impl< aux::vector_tag<55> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector56<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<56> >
{
    template< typename Vector > struct apply
    {
        typedef vector55<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item50
            , typename Vector::item51, typename Vector::item52
            , typename Vector::item53, typename Vector::item54
            , typename Vector::item55
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<55> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector56<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<56> >
{
    template< typename Vector > struct apply
    {
        typedef vector55<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54
            > type;
    };
};

template< typename V >
struct v_at< V,56 >
{
    typedef typename V::item56 type;
};

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50, typename T51, typename T52, typename T53, typename T54
    , typename T55, typename T56
    >
struct vector57
{
    typedef aux::vector_tag<57> tag;
    typedef vector57 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    typedef T51 item51;
    typedef T52 item52;
    typedef T53 item53;
    typedef T54 item54;
    typedef T55 item55;
    typedef T56 item56;
    

    typedef void_ item57;
    typedef T56 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,57 > end;
};

template<>
struct push_front_impl< aux::vector_tag<56> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector57<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<57> >
{
    template< typename Vector > struct apply
    {
        typedef vector56<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item50
            , typename Vector::item51, typename Vector::item52
            , typename Vector::item53, typename Vector::item54
            , typename Vector::item55, typename Vector::item56
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<56> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector57<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<57> >
{
    template< typename Vector > struct apply
    {
        typedef vector56<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            > type;
    };
};

template< typename V >
struct v_at< V,57 >
{
    typedef typename V::item57 type;
};

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50, typename T51, typename T52, typename T53, typename T54
    , typename T55, typename T56, typename T57
    >
struct vector58
{
    typedef aux::vector_tag<58> tag;
    typedef vector58 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    typedef T51 item51;
    typedef T52 item52;
    typedef T53 item53;
    typedef T54 item54;
    typedef T55 item55;
    typedef T56 item56;
    typedef T57 item57;
    

    typedef void_ item58;
    typedef T57 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,58 > end;
};

template<>
struct push_front_impl< aux::vector_tag<57> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector58<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<58> >
{
    template< typename Vector > struct apply
    {
        typedef vector57<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item50
            , typename Vector::item51, typename Vector::item52
            , typename Vector::item53, typename Vector::item54
            , typename Vector::item55, typename Vector::item56
            , typename Vector::item57
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<57> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector58<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<58> >
{
    template< typename Vector > struct apply
    {
        typedef vector57<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56
            > type;
    };
};

template< typename V >
struct v_at< V,58 >
{
    typedef typename V::item58 type;
};

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50, typename T51, typename T52, typename T53, typename T54
    , typename T55, typename T56, typename T57, typename T58
    >
struct vector59
{
    typedef aux::vector_tag<59> tag;
    typedef vector59 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    typedef T51 item51;
    typedef T52 item52;
    typedef T53 item53;
    typedef T54 item54;
    typedef T55 item55;
    typedef T56 item56;
    typedef T57 item57;
    typedef T58 item58;
    

    typedef void_ item59;
    typedef T58 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,59 > end;
};

template<>
struct push_front_impl< aux::vector_tag<58> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector59<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56, typename Vector::item57
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<59> >
{
    template< typename Vector > struct apply
    {
        typedef vector58<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item50
            , typename Vector::item51, typename Vector::item52
            , typename Vector::item53, typename Vector::item54
            , typename Vector::item55, typename Vector::item56
            , typename Vector::item57, typename Vector::item58
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<58> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector59<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56, typename Vector::item57
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<59> >
{
    template< typename Vector > struct apply
    {
        typedef vector58<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56, typename Vector::item57
            > type;
    };
};

template< typename V >
struct v_at< V,59 >
{
    typedef typename V::item59 type;
};

template<
      typename T0, typename T1, typename T2, typename T3, typename T4
    , typename T5, typename T6, typename T7, typename T8, typename T9
    , typename T10, typename T11, typename T12, typename T13, typename T14
    , typename T15, typename T16, typename T17, typename T18, typename T19
    , typename T20, typename T21, typename T22, typename T23, typename T24
    , typename T25, typename T26, typename T27, typename T28, typename T29
    , typename T30, typename T31, typename T32, typename T33, typename T34
    , typename T35, typename T36, typename T37, typename T38, typename T39
    , typename T40, typename T41, typename T42, typename T43, typename T44
    , typename T45, typename T46, typename T47, typename T48, typename T49
    , typename T50, typename T51, typename T52, typename T53, typename T54
    , typename T55, typename T56, typename T57, typename T58, typename T59
    >
struct vector60
{
    typedef aux::vector_tag<60> tag;
    typedef vector60 type;
    typedef T0 item0;
    typedef T1 item1;
    typedef T2 item2;
    typedef T3 item3;
    typedef T4 item4;
    typedef T5 item5;
    typedef T6 item6;
    typedef T7 item7;
    typedef T8 item8;
    typedef T9 item9;
    typedef T10 item10;
    typedef T11 item11;
    typedef T12 item12;
    typedef T13 item13;
    typedef T14 item14;
    typedef T15 item15;
    typedef T16 item16;
    typedef T17 item17;
    typedef T18 item18;
    typedef T19 item19;
    typedef T20 item20;
    typedef T21 item21;
    typedef T22 item22;
    typedef T23 item23;
    typedef T24 item24;
    typedef T25 item25;
    typedef T26 item26;
    typedef T27 item27;
    typedef T28 item28;
    typedef T29 item29;
    typedef T30 item30;
    typedef T31 item31;
    typedef T32 item32;
    typedef T33 item33;
    typedef T34 item34;
    typedef T35 item35;
    typedef T36 item36;
    typedef T37 item37;
    typedef T38 item38;
    typedef T39 item39;
    typedef T40 item40;
    typedef T41 item41;
    typedef T42 item42;
    typedef T43 item43;
    typedef T44 item44;
    typedef T45 item45;
    typedef T46 item46;
    typedef T47 item47;
    typedef T48 item48;
    typedef T49 item49;
    typedef T50 item50;
    typedef T51 item51;
    typedef T52 item52;
    typedef T53 item53;
    typedef T54 item54;
    typedef T55 item55;
    typedef T56 item56;
    typedef T57 item57;
    typedef T58 item58;
    typedef T59 item59;
    

    typedef void_ item60;
    typedef T59 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,60 > end;
};

template<>
struct push_front_impl< aux::vector_tag<59> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector60<
              T
              ,
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56, typename Vector::item57
            , typename Vector::item58
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<60> >
{
    template< typename Vector > struct apply
    {
        typedef vector59<
              typename Vector::item1, typename Vector::item2
            , typename Vector::item3, typename Vector::item4
            , typename Vector::item5, typename Vector::item6
            , typename Vector::item7, typename Vector::item8
            , typename Vector::item9, typename Vector::item10
            , typename Vector::item11, typename Vector::item12
            , typename Vector::item13, typename Vector::item14
            , typename Vector::item15, typename Vector::item16
            , typename Vector::item17, typename Vector::item18
            , typename Vector::item19, typename Vector::item20
            , typename Vector::item21, typename Vector::item22
            , typename Vector::item23, typename Vector::item24
            , typename Vector::item25, typename Vector::item26
            , typename Vector::item27, typename Vector::item28
            , typename Vector::item29, typename Vector::item30
            , typename Vector::item31, typename Vector::item32
            , typename Vector::item33, typename Vector::item34
            , typename Vector::item35, typename Vector::item36
            , typename Vector::item37, typename Vector::item38
            , typename Vector::item39, typename Vector::item40
            , typename Vector::item41, typename Vector::item42
            , typename Vector::item43, typename Vector::item44
            , typename Vector::item45, typename Vector::item46
            , typename Vector::item47, typename Vector::item48
            , typename Vector::item49, typename Vector::item50
            , typename Vector::item51, typename Vector::item52
            , typename Vector::item53, typename Vector::item54
            , typename Vector::item55, typename Vector::item56
            , typename Vector::item57, typename Vector::item58
            , typename Vector::item59
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<59> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector60<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56, typename Vector::item57
            , typename Vector::item58
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<60> >
{
    template< typename Vector > struct apply
    {
        typedef vector59<
              typename Vector::item0, typename Vector::item1
            , typename Vector::item2, typename Vector::item3
            , typename Vector::item4, typename Vector::item5
            , typename Vector::item6, typename Vector::item7
            , typename Vector::item8, typename Vector::item9
            , typename Vector::item10, typename Vector::item11
            , typename Vector::item12, typename Vector::item13
            , typename Vector::item14, typename Vector::item15
            , typename Vector::item16, typename Vector::item17
            , typename Vector::item18, typename Vector::item19
            , typename Vector::item20, typename Vector::item21
            , typename Vector::item22, typename Vector::item23
            , typename Vector::item24, typename Vector::item25
            , typename Vector::item26, typename Vector::item27
            , typename Vector::item28, typename Vector::item29
            , typename Vector::item30, typename Vector::item31
            , typename Vector::item32, typename Vector::item33
            , typename Vector::item34, typename Vector::item35
            , typename Vector::item36, typename Vector::item37
            , typename Vector::item38, typename Vector::item39
            , typename Vector::item40, typename Vector::item41
            , typename Vector::item42, typename Vector::item43
            , typename Vector::item44, typename Vector::item45
            , typename Vector::item46, typename Vector::item47
            , typename Vector::item48, typename Vector::item49
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56, typename Vector::item57
            , typename Vector::item58
            > type;
    };
};

template< typename V >
struct v_at< V,60 >
{
    typedef typename V::item60 type;
};

}}
