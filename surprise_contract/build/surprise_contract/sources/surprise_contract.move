module surprise_contract::surprise_contract {
    use std::string;
    use std::vector;
    use sui::vec_set::{Self, VecSet};
    use sui::random::{Random, new_generator, RandomGenerator};
    use sui::tx_context::{Self, TxContext};

    public struct GiftBox has drop, copy {
        id: address,
        content: string::String,
        color: string::String,
    }

    public struct SurprisePack has drop, copy {
        id: address,
        boxes: VecSet<GiftBox>,
        is_claimed: bool,
    }

    entry fun create_box(
        content: string::String,
        r: &Random,
        ctx: &mut TxContext
    ): GiftBox {
        let mut generator = new_generator(r, ctx);
        let color = generate_random_color(&mut generator);

        let box = GiftBox {
            id: tx_context::fresh_object_address(ctx),
            content: content,
            color: color.to_string(),
        };

        box
    }

    fun generate_random_color(r: &mut RandomGenerator): vector<u8> {
        let r_val = r.generate_u8_in_range(0, 254);
        let g_val = r.generate_u8_in_range(0, 210);
        let b_val = r.generate_u8_in_range(50, 90);

        // Convert to hex format
        let mut color = vector::empty<u8>();
        vector::push_back(&mut color, hex_char(r_val >> 4));
        vector::push_back(&mut color, hex_char(r_val & 0xF));
        vector::push_back(&mut color, hex_char(g_val >> 4));
        vector::push_back(&mut color, hex_char(g_val & 0xF));
        vector::push_back(&mut color, hex_char(b_val >> 4));
        vector::push_back(&mut color, hex_char(b_val & 0xF));

        color
    }

    fun hex_char(val: u8): u8 {
        if (val < 10) {
            48 + val // '0' to '9'
        } else {
            87 + val // 'a' to 'f'
        }
    }

    public fun generate_pack(
        box_contents: vector<string::String>,
        r: &Random,
        ctx: &mut TxContext
    ): SurprisePack {
        let mut generator = new_generator(r, ctx);
        let mut gift_boxes = vec_set::empty<GiftBox>();

        let len = vector::length(&box_contents);
        let mut i = 0;
        while (i < len) {
            let content = *vector::borrow(&box_contents, i);
            let box = create_box(content, r, ctx);
            vec_set::insert(&mut gift_boxes, box);
            i = i + 1;
        };

        let pack = SurprisePack {
            id: tx_context::fresh_object_address(ctx),
            boxes: gift_boxes,
            is_claimed: false,
        };

        pack
    }
}
