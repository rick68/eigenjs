
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
    , typename T50, typename T51, typename T52, typename T53, typename T54
    , typename T55, typename T56, typename T57, typename T58, typename T59
    , typename T60
    >
struct vector61
{
    typedef aux::vector_tag<61> tag;
    typedef vector61 type;
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
    typedef T60 item60;
    

    typedef void_ item61;
    typedef T60 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,61 > end;
};

template<>
struct push_front_impl< aux::vector_tag<60> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector61<
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
            , typename Vector::item58, typename Vector::item59
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<61> >
{
    template< typename Vector > struct apply
    {
        typedef vector60<
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
            , typename Vector::item59, typename Vector::item60
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<60> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector61<
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
            , typename Vector::item58, typename Vector::item59
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<61> >
{
    template< typename Vector > struct apply
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
            , typename Vector::item58, typename Vector::item59
            > type;
    };
};

template< typename V >
struct v_at< V,61 >
{
    typedef typename V::item61 type;
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
    , typename T60, typename T61
    >
struct vector62
{
    typedef aux::vector_tag<62> tag;
    typedef vector62 type;
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
    typedef T60 item60;
    typedef T61 item61;
    

    typedef void_ item62;
    typedef T61 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,62 > end;
};

template<>
struct push_front_impl< aux::vector_tag<61> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector62<
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
            , typename Vector::item48, typename Vector::item59
            , typename Vector::item50, typename Vector::item51
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56, typename Vector::item57
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<62> >
{
    template< typename Vector > struct apply
    {
        typedef vector61<
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
            , typename Vector::item59, typename Vector::item60
            , typename Vector::item61
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<61> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector62<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<62> >
{
    template< typename Vector > struct apply
    {
        typedef vector61<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60
            > type;
    };
};

template< typename V >
struct v_at< V,62 >
{
    typedef typename V::item62 type;
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
    , typename T60, typename T61, typename T62
    >
struct vector63
{
    typedef aux::vector_tag<63> tag;
    typedef vector63 type;
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
    typedef T60 item60;
    typedef T61 item61;
    typedef T62 item62;
    

    typedef void_ item63;
    typedef T62 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,63 > end;
};

template<>
struct push_front_impl< aux::vector_tag<62> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector63<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<63> >
{
    template< typename Vector > struct apply
    {
        typedef vector62<
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
            , typename Vector::item53, typename Vector::item54
            , typename Vector::item55, typename Vector::item56
            , typename Vector::item57, typename Vector::item58
            , typename Vector::item59, typename Vector::item50
            , typename Vector::item61, typename Vector::item62
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<62> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector63<
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
            , typename Vector::item52, typename Vector::item53
            , typename Vector::item54, typename Vector::item55
            , typename Vector::item56, typename Vector::item57
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<63> >
{
    template< typename Vector > struct apply
    {
        typedef vector62<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            > type;
    };
};

template< typename V >
struct v_at< V,63 >
{
    typedef typename V::item63 type;
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
    , typename T60, typename T61, typename T62, typename T63
    >
struct vector64
{
    typedef aux::vector_tag<64> tag;
    typedef vector64 type;
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
    typedef T60 item60;
    typedef T61 item61;
    typedef T62 item62;
    typedef T63 item63;
    

    typedef void_ item64;
    typedef T63 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,64 > end;
};

template<>
struct push_front_impl< aux::vector_tag<63> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector64<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<64> >
{
    template< typename Vector > struct apply
    {
        typedef vector63<
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
            , typename Vector::item59, typename Vector::item60
            , typename Vector::item61, typename Vector::item62
            , typename Vector::item63
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<63> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector64<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<64> >
{
    template< typename Vector > struct apply
    {
        typedef vector63<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62
            > type;
    };
};

template< typename V >
struct v_at< V,64 >
{
    typedef typename V::item64 type;
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
    , typename T60, typename T61, typename T62, typename T63, typename T64
    >
struct vector65
{
    typedef aux::vector_tag<65> tag;
    typedef vector65 type;
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
    typedef T60 item60;
    typedef T61 item61;
    typedef T62 item62;
    typedef T63 item63;
    typedef T64 item64;
    

    typedef void_ item65;
    typedef T64 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,65 > end;
};

template<>
struct push_front_impl< aux::vector_tag<64> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector65<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<65> >
{
    template< typename Vector > struct apply
    {
        typedef vector64<
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
            , typename Vector::item59, typename Vector::item60
            , typename Vector::item61, typename Vector::item62
            , typename Vector::item63, typename Vector::item64
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<64> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector65<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<65> >
{
    template< typename Vector > struct apply
    {
        typedef vector64<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            > type;
    };
};

template< typename V >
struct v_at< V,65 >
{
    typedef typename V::item65 type;
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
    , typename T60, typename T61, typename T62, typename T63, typename T64
    , typename T65
    >
struct vector66
{
    typedef aux::vector_tag<66> tag;
    typedef vector66 type;
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
    typedef T60 item60;
    typedef T61 item61;
    typedef T62 item62;
    typedef T63 item63;
    typedef T64 item64;
    typedef T65 item65;
    

    typedef void_ item66;
    typedef T65 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,66 > end;
};

template<>
struct push_front_impl< aux::vector_tag<65> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector66<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<66> >
{
    template< typename Vector > struct apply
    {
        typedef vector65<
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
            , typename Vector::item59, typename Vector::item60
            , typename Vector::item61, typename Vector::item62
            , typename Vector::item63, typename Vector::item64
            , typename Vector::item65
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<65> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector66<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<66> >
{
    template< typename Vector > struct apply
    {
        typedef vector65<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64
            > type;
    };
};

template< typename V >
struct v_at< V,66 >
{
    typedef typename V::item66 type;
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
    , typename T60, typename T61, typename T62, typename T63, typename T64
    , typename T65, typename T66
    >
struct vector67
{
    typedef aux::vector_tag<67> tag;
    typedef vector67 type;
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
    typedef T60 item60;
    typedef T61 item61;
    typedef T62 item62;
    typedef T63 item63;
    typedef T64 item64;
    typedef T65 item65;
    typedef T66 item66;
    

    typedef void_ item67;
    typedef T66 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,67 > end;
};

template<>
struct push_front_impl< aux::vector_tag<66> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector67<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<67> >
{
    template< typename Vector > struct apply
    {
        typedef vector66<
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
            , typename Vector::item59, typename Vector::item60
            , typename Vector::item61, typename Vector::item62
            , typename Vector::item63, typename Vector::item64
            , typename Vector::item65, typename Vector::item66
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<66> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector67<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<67> >
{
    template< typename Vector > struct apply
    {
        typedef vector66<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            > type;
    };
};

template< typename V >
struct v_at< V,67 >
{
    typedef typename V::item67 type;
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
    , typename T60, typename T61, typename T62, typename T63, typename T64
    , typename T65, typename T66, typename T67
    >
struct vector68
{
    typedef aux::vector_tag<68> tag;
    typedef vector68 type;
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
    typedef T60 item60;
    typedef T61 item61;
    typedef T62 item62;
    typedef T63 item63;
    typedef T64 item64;
    typedef T65 item65;
    typedef T66 item66;
    typedef T67 item67;
    

    typedef void_ item68;
    typedef T67 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,68 > end;
};

template<>
struct push_front_impl< aux::vector_tag<67> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector68<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            , typename Vector::item66
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<68> >
{
    template< typename Vector > struct apply
    {
        typedef vector67<
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
            , typename Vector::item59, typename Vector::item60
            , typename Vector::item61, typename Vector::item62
            , typename Vector::item63, typename Vector::item64
            , typename Vector::item65, typename Vector::item66
            , typename Vector::item67
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<67> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector68<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            , typename Vector::item66
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<68> >
{
    template< typename Vector > struct apply
    {
        typedef vector67<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            , typename Vector::item66
            > type;
    };
};

template< typename V >
struct v_at< V,68 >
{
    typedef typename V::item68 type;
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
    , typename T60, typename T61, typename T62, typename T63, typename T64
    , typename T65, typename T66, typename T67, typename T68
    >
struct vector69
{
    typedef aux::vector_tag<69> tag;
    typedef vector69 type;
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
    typedef T60 item60;
    typedef T61 item61;
    typedef T62 item62;
    typedef T63 item63;
    typedef T64 item64;
    typedef T65 item65;
    typedef T66 item66;
    typedef T67 item67;
    typedef T68 item68;
    

    typedef void_ item69;
    typedef T58 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,69 > end;
};

template<>
struct push_front_impl< aux::vector_tag<68> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector69<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            , typename Vector::item66, typename Vector::item67
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<69> >
{
    template< typename Vector > struct apply
    {
        typedef vector68<
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
            , typename Vector::item59, typename Vector::item60
            , typename Vector::item61, typename Vector::item62
            , typename Vector::item63, typename Vector::item64
            , typename Vector::item65, typename Vector::item66
            , typename Vector::item67, typename Vector::item68
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<68> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector69<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            , typename Vector::item66, typename Vector::item67
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<69> >
{
    template< typename Vector > struct apply
    {
        typedef vector68<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            , typename Vector::item66, typename Vector::item67
            > type;
    };
};

template< typename V >
struct v_at< V,69 >
{
    typedef typename V::item69 type;
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
    , typename T60, typename T61, typename T62, typename T63, typename T64
    , typename T65, typename T66, typename T67, typename T68, typename T69
    >
struct vector70
{
    typedef aux::vector_tag<70> tag;
    typedef vector70 type;
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
    typedef T60 item60;
    typedef T61 item61;
    typedef T62 item62;
    typedef T63 item63;
    typedef T64 item64;
    typedef T65 item65;
    typedef T66 item66;
    typedef T67 item67;
    typedef T68 item68;
    typedef T69 item69;
    

    typedef void_ item70;
    typedef T69 back;
    typedef v_iter< type,0 > begin;
    typedef v_iter< type,70 > end;
};

template<>
struct push_front_impl< aux::vector_tag<69> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector70<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            , typename Vector::item66, typename Vector::item67
            , typename Vector::item68
            > type;
    };
};

template<>
struct pop_front_impl< aux::vector_tag<70> >
{
    template< typename Vector > struct apply
    {
        typedef vector69<
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
            , typename Vector::item59, typename Vector::item60
            , typename Vector::item61, typename Vector::item62
            , typename Vector::item63, typename Vector::item64
            , typename Vector::item65, typename Vector::item66
            , typename Vector::item67, typename Vector::item68
            , typename Vector::item69
            > type;
    };
};

template<>
struct push_back_impl< aux::vector_tag<69> >
{
    template< typename Vector, typename T > struct apply
    {
        typedef vector70<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            , typename Vector::item66, typename Vector::item67
            , typename Vector::item68
              ,
              T
            > type;
    };
};

template<>
struct pop_back_impl< aux::vector_tag<70> >
{
    template< typename Vector > struct apply
    {
        typedef vector69<
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
            , typename Vector::item58, typename Vector::item59
            , typename Vector::item60, typename Vector::item61
            , typename Vector::item62, typename Vector::item63
            , typename Vector::item64, typename Vector::item65
            , typename Vector::item66, typename Vector::item67
            , typename Vector::item68
            > type;
    };
};

template< typename V >
struct v_at< V,70 >
{
    typedef typename V::item70 type;
};

}}
